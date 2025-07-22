"use client";

import { Button, Input, Textarea } from "@heroui/react";
import Link from "next/link";

type BasicDetails = {
  id: string;
  siteName: string;
  tagLine: string;
  aboutMe: string;
  aboutMeImage: string;
  profileImage: string;
  contactEmail: string;
  createdAt: string;
  updatedAt: string;
};

export default function Contact({
  basicDetails,
}: {
  basicDetails?: BasicDetails;
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const name = formData.get('name');
    // const email = formData.get('email');
    // const message = formData.get('message');

    //TODO: Configure Resent API
  };
  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <form
        className="w-full justify-center items-center space-y-4 m-auto max-w-2xl"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          label="Your Name"
          placeholder="Enter your name"
          size="lg"
          isRequired
          errorMessage="Name is required"
        />
        <Input
          type="email"
          label="Your Email"
          placeholder="Enter your Email"
          size="lg"
          isRequired
          errorMessage="Email is required"
        />
        <Textarea
          label="Message (optional)"
          placeholder="Your Message"
          size="lg"
        />
        <Button type="submit" color="primary" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
      <div className="mt-8 text-center">
        Or reach out via{" "}
        <Link
          href={`mailto:${basicDetails?.contactEmail || "deepakroy11@gmail.com"}`}
        >
          email
        </Link>
      </div>
    </section>
  );
}
