import {
  Image,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
} from "@heroui/react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Linkify",
      description:
        "Linkify is a web application for creating short links and generating QR codes. It features a React front end styled with Tailwind CSS and Hero UI, and is powered by a Node.js + Express back end for processing and link management. The platform offers a simple, modern interface for quickly transforming long URLs into concise, shareable links, complete with optional QR codes for easy offline sharing.",
      image: "/projects/linkify-white.png",
      tech: ["React", "Tailwind", "Node"],
      link: "https://linkify.deepakroy.dev/",
    },
    {
      id: 2,
      title: "Finly",
      description:
        "Finly is a web application built with Next.js, Tailwind CSS, and Material UI that provides tools for performing various types of financial calculations. It offers a clean, modern interface to help users easily compute and manage different personal or business finance scenarios.",
      image: "/projects/finly-white.png",
      tech: ["Next.js", "React", "Tailwind CSS", "Material UI"],
      link: "https://linkify.deepakroy.dev/",
    },
    {
      id: 3,
      title: "Schooletics",
      description:
        "Schooletics offers customizable sports training programs delivered across multiple environments schools, residential complexes, and individual sessions aiming to build athletic skills effectively. Located in Kolkata, it provides accessible contact details and has an active portfolio of past programs showcased on the site. The platform is built using WordPress with Bootstrap CSS, leverages G Suite for communication and collaboration, and incorporates SEO best practices to enhance its online visibility.",
      image: "/projects/schooletics-white.png",
      tech: ["WordPress", "Bootstrap", "CSS", "JavaScript"],
      link: "https://schooletics.in",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 ">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Card key={`${project.id}-${project.title}`} isBlurred>
            <CardHeader className="flex-col items-start">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center p-5"
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <Chip key={index}>{tech}</Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <Link href={project.link} target="_black">
                View Project →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
