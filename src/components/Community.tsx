import { Users, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

export const Community = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-eternal-blue text-center mb-8">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 font-merriweather max-w-2xl mx-auto">
          Connect with fellow archivists, creators, and knowledge seekers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-eternal-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-eternal-gold" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2">Virtual Book Clubs</h3>
            <p className="text-gray-600">Join discussions about preserved works with readers worldwide</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-eternal-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-eternal-gold" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2">Discussion Boards</h3>
            <p className="text-gray-600">Engage in meaningful conversations about knowledge preservation</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-eternal-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-eternal-gold" />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2">Curated Collections</h3>
            <p className="text-gray-600">Discover and create themed collections of preserved works</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-eternal-gold text-eternal-blue hover:bg-eternal-gold/90">
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
};