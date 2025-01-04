import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <section className="py-20 bg-eternal-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-300 mb-8 font-merriweather max-w-2xl mx-auto">
          Stay updated with the latest developments in digital preservation and blockchain technology.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-eternal-blue"
              required
            />
            <button
              type="submit"
              className="bg-eternal-gold text-eternal-blue font-montserrat font-semibold px-8 py-3 rounded-lg transition-all hover:bg-white"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};