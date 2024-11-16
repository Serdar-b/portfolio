import HeroSection from "@/components/HeroSection";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative bg-custom-gradient flex items-center justify-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
        <HeroSection />
      </div>
    </main>
  );
}
