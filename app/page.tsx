import { Header } from "@/components/Header";
import { Box } from "@mantine/core"
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";

export default function HomePage() {
  return (
    <main> 
      <Header />
      <About />
      <Experience />
    </main>
  );
}
