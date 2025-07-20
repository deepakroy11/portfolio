# Portfolio

This is a modern and responsive portfolio frontend built with [Next.js](https://nextjs.org), [Hero UI](https://heroui.dev/), and [Tailwind CSS](https://tailwindcss.com/). The project showcases personal blog posts, featured projects, and developer tools in a clean, performant layout. It includes dynamic routing, optimized image handling, and a theme toggle for dark/light mode.

## Features

- ⚡ Built with Next.js App Router
- 🎨 Styled using Tailwind CSS and Hero UI components
- 🌓 Dark/Light mode toggle
- 🖼️ Optimized image handling
- 📝 Blog section
- 💼 Project showcase with details page
- 🌐 Responsive design
- 🔗 Social and external links

## Project Structure

```
.
├── public/                # Static assets (images, SVGs)
├── src/
│   ├── app/               # Next.js app directory (routing, pages, API)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── project-details/
│   │       └── page.tsx
│   ├── components/        # Reusable UI components (About, Projects, etc.)
│   ├── context/           # React context providers
│   ├── data/              # Static data files
│   ├── hero.ts            # Hero section logic
│   ├── styles/            # Custom styles
│   └── theme/             # Theme configuration
├── tailwind.config.ts     # Tailwind CSS config
├── next.config.ts         # Next.js config
├── package.json           # Project metadata and scripts
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Customization

- Add your projects in [`src/components/Projects.tsx`](src/components/Projects.tsx)
- Update project details in [`src/app/project-details/page.tsx`](src/app/project-details/page.tsx)
- Replace images in the [public/](public/) directory

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Hero UI Documentation](https://heroui.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more deployment options,