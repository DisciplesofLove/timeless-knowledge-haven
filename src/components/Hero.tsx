import { Book } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.1)_0%,rgba(26,31,44,0)_70%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <Book className="w-20 h-20 mx-auto mb-6 animate-glow-pulse text-[#D946EF]" />
        </div>
        <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E5DEFF] to-[#D946EF]">
          Preserving Knowledge.<br />Empowering Generations.
        </h1>
        <p className="font-merriweather text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Join the revolution in digital preservation, where knowledge lives forever on the blockchain.
        </p>
        <button className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-montserrat font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]">
          Explore the Archive
        </button>
      </div>
    </div>
  );
};