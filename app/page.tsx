import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main
      className="relative bg-custom-gradient flex items-center justify-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <Navigation />
        <HeroSection />
        <Projects />
        <Experience />
        <About />
        <Footer />
      </div>
    </main>
  );
}
