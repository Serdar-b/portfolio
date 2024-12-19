import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import { ShootingStars } from "../components/ui/ShootingStars";
import { StarsBackground } from "../components/ui/StarsBackground";
export default function Home() {
  return (
    <main
      className="relative bg-custom-gradient flex items-center justify-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5"
    >
      <ShootingStars
        starWidth={12}
        starHeight={2}
        minDelay={2000}
        maxDelay={4000}
      />
      <StarsBackground />
      <div className="relative z-10 max-w-7xl w-full">
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
