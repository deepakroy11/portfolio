import { Button, Image, Link } from "@heroui/react";


// You can place this type in a types file or at the top of your component file

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
}

export default function Hero({basicDetails}:{basicDetails: BasicDetails}) {
  console.log(basicDetails)
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
      <Image
        src="/avatar.jpg"
        alt="Your Avatar"
        className="w-32 h-32 rounded-full shadow-lg mb-6"
      />
      <h1 className="text-5xl font-bold">Hi, I&apos;m {basicDetails.siteName}</h1>
      <p className="mt-4 text-xl">{basicDetails.tagLine}</p>
      <Button
        as={Link}
        href="#projects"
        size="lg"
        color="primary"
        variant="solid"
      >
        View My Work
      </Button>
    </section>
  );
}
