import { useState } from "react";
import { Book } from "lucide-react";
import { Button } from "./ui/button";
import { FilterBar } from "./marketplace/FilterBar";
import { ListingCard, NFTListing } from "./marketplace/ListingCard";

const SAMPLE_LISTINGS: NFTListing[] = [
  {
    id: 1,
    title: "Ancient Philosophies",
    author: "Dr. Elena Martinez",
    description: "A comprehensive exploration of ancient philosophical traditions and their relevance in the modern world.",
    category: "Philosophy",
    price: "2.5 ETH",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600",
    blockchain: "Ethereum",
    likes: 124,
    views: 1502,
    tokenId: "0x123"
  },
  {
    id: 2,
    title: "Digital Age Chronicles",
    author: "James Chen",
    description: "An in-depth analysis of how technology is reshaping our society and future prospects.",
    category: "Technology",
    price: "1.8 ETH",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=600",
    blockchain: "Ethereum",
    likes: 89,
    views: 945,
    tokenId: "0x124"
  },
  {
    id: 3,
    title: "Future of Knowledge",
    author: "Sarah Williams",
    description: "Exploring the intersection of science, technology, and human consciousness.",
    category: "Science",
    price: "3.0 ETH",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600",
    blockchain: "Polygon",
    likes: 256,
    views: 2103,
    tokenId: "0x125"
  },
  {
    id: 4,
    title: "Quantum Theories",
    author: "Dr. Robert Blake",
    description: "A deep dive into quantum mechanics and its implications for our understanding of reality.",
    category: "Science",
    price: "2.2 ETH",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=600",
    blockchain: "Ethereum",
    likes: 167,
    views: 1834,
    tokenId: "0x126"
  }
];

export const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5] relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.1)_0%,rgba(26,31,44,0)_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Digital Marketplace
            </h2>
            <p className="text-xl text-gray-200 font-merriweather max-w-2xl">
              Discover and collect timeless knowledge preserved on the blockchain
            </p>
          </div>
          <Button className="bg-[#D946EF] hover:bg-[#D946EF]/80 text-white">
            <Book className="mr-2 h-4 w-4" />
            List Archive
          </Button>
        </div>

        <FilterBar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
          onPriceRangeChange={handlePriceRangeChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};