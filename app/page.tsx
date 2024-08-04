"use client";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  
  return (
    <main> 
      <Header />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
