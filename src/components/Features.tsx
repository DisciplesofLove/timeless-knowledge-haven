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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-eternal-blue text-center mb-16">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg transition-all hover:shadow-lg">
              <div className="w-16 h-16 mb-6 mx-auto bg-eternal-blue rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-eternal-gold" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-eternal-blue mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center font-merriweather">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};