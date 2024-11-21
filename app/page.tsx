import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main
      className="relative bg-custom-gradient flex items-center justify-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <Projects />
        <Experience />
        <About />
        <Footer />
      </div>
    </main>
  );
}
