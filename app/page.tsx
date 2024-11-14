import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main
      className="relative bg-custom-gradientflex items-center justify-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <HeroSection />
      </div>
    </main>
  );
}
