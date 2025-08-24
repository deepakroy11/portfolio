# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Only copy dependency manifests for caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy all project files and build the app
COPY . .
RUN npm run build

# Stage 2: Production Runtime
FROM node:18-alpine AS runner
WORKDIR /app

# Copy built app and production dependencies only
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js


# Expose Next.js default port
EXPOSE 3000

# Recommended: run as non-root for security
RUN addgroup -S nodejs || true && adduser -S -G nodejs nextjs || true
USER nextjs


# Run the app
CMD ["npm", "run", "start"]
