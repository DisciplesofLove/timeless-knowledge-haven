import { Users, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

export const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-white text-center mb-8">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-200 text-center mb-12 font-merriweather max-w-2xl mx-auto">
          Connect with fellow archivists, creators, and knowledge seekers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
            <div className="w-16 h-16 bg-[#D946EF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#D946EF]" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2 text-white">Virtual Book Clubs</h3>
            <p className="text-gray-300">Join discussions about preserved works with readers worldwide</p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
            <div className="w-16 h-16 bg-[#D946EF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-[#D946EF]" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2 text-white">Discussion Boards</h3>
            <p className="text-gray-300">Engage in meaningful conversations about knowledge preservation</p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
            <div className="w-16 h-16 bg-[#D946EF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-[#D946EF]" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2 text-white">Curated Collections</h3>
            <p className="text-gray-300">Discover and create themed collections of preserved works</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-[#D946EF] text-white hover:bg-[#D946EF]/90">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};