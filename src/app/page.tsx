import Image from "next/image";
import HeroSection from "@/components/hero";
import Container from "@/components/container";
import SkillsSection from "@/components/skills";
import WorksSection from "@/components/works";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <Container>
      <main>
        <HeroSection />
        <SkillsSection />
        <WorksSection />
        <Contact />
      </main>
    </Container>
  );
}
