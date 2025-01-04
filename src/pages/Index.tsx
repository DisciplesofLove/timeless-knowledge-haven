import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Marketplace } from "@/components/Marketplace";
import { Upload } from "@/components/Upload";
import { Community } from "@/components/Community";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Marketplace />
        <Upload />
        <Community />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;