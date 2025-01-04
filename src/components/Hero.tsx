import { Book } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-eternal-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.1)_0%,rgba(26,54,93,0)_70%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <Book className="w-20 h-20 mx-auto mb-6 animate-glow-pulse text-eternal-gold" />
        </div>
        <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-eternal-gold">
          Preserving Knowledge.<br />Empowering Generations.
        </h1>
        <p className="font-merriweather text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Join the revolution in digital preservation, where knowledge lives forever on the blockchain.
        </p>
        <button className="bg-eternal-gold text-eternal-blue font-montserrat font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(197,165,114,0.3)]">
          Explore the Archive
        </button>
      </div>
    </div>
  );
};