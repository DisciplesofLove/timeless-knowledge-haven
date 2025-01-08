import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Marketplace } from "@/components/Marketplace";

const BrowsePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Marketplace />
      </main>
      <Footer />
    </div>
  );
};

export default BrowsePage;