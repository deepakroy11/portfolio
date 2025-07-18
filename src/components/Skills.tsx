import { FaReact, FaJs, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Card, CardBody } from "@heroui/react";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 ">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="text-center hover:shadow-lg transition-transform duration-300 group-hover:scale-110 hover:scale-110"
          >
            <CardBody className="flex flex-col items-center justify-center">
              <div className="text-4xl mb-3 ">{skill.icon}</div>
              <span className="font-medium">{skill.name}</span>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
