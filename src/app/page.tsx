import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {
  let skillsData = null;

  try {
    skillsData = await fetch(`${process.env.API_URL}/settings/skill`).then(
      (res) => res.json()
    );
  } catch {
    skillsData = null;
  }
  let basicDetailsData = null;
  try {
    basicDetailsData = await fetch(
      `${process.env.API_URL}/settings/basic-details`
    ).then((res) => res.json());
  } catch {
    basicDetailsData = null;
  }

  return (
    <div>
      <Hero basicDetails={basicDetailsData?.basicDetails} />
      <About basicDetails={basicDetailsData?.basicDetails} />
      <Projects />
      <Skills skills={skillsData?.skills} />
      <Contact basicDetails={basicDetailsData?.basicDetails} />
    </div>
  );
}
