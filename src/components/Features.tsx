import { Shield, Globe, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Permanent Preservation",
    description: "Your knowledge, preserved forever on the blockchain, immune to loss or corruption."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access wisdom from anywhere, anytime. Knowledge knows no boundaries."
  },
  {
    icon: Users,
    title: "Empowering Creators",
    description: "Fair compensation and recognition for knowledge contributors worldwide."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Technology",
    description: "Sustainable blockchain solutions that protect both knowledge and our planet."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.1)_0%,rgba(26,31,44,0)_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-montserrat font-bold text-white text-center mb-16">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg transition-all hover:transform hover:scale-105 bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-16 h-16 mb-6 mx-auto bg-[#D946EF]/20 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-[#D946EF]" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-center font-merriweather">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};