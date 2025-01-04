import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Marketplace } from "@/components/Marketplace";
import { Community } from "@/components/Community";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Marketplace />
      <Community />
      <Newsletter />
    </div>
  );
};

export default Index;