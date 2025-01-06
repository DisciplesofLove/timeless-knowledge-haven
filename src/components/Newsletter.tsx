import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5]">
      <div className="container mx-auto px-4 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.1)_0%,rgba(26,31,44,0)_70%)]" />
        <div className="relative z-10">
          <Mail className="w-16 h-16 mx-auto mb-6 text-[#D946EF] animate-glow-pulse" />
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6 bg-clip-text">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-200 mb-8 font-merriweather max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on digital preservation and blockchain technology.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D946EF] backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="bg-[#D946EF] text-white font-montserrat font-semibold px-8 py-3 rounded-lg transition-all hover:bg-[#E5DEFF] hover:text-[#1A1F2C]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};