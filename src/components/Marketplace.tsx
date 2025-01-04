import { Search, Filter, Book } from "lucide-react";
import { Button } from "./ui/button";

const SAMPLE_BOOKS = [
  {
    id: 1,
    title: "Ancient Philosophies",
    author: "Dr. Elena Martinez",
    category: "Philosophy",
    price: "2.5 ETH",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Digital Age Chronicles",
    author: "James Chen",
    category: "Technology",
    price: "1.8 ETH",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Future of Knowledge",
    author: "Sarah Williams",
    category: "Science",
    price: "3.0 ETH",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Quantum Theories",
    author: "Dr. Robert Blake",
    category: "Science",
    price: "2.2 ETH",
    image: "/placeholder.svg"
  }
];

export const Marketplace = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-eternal-blue text-center mb-8">
          Digital Marketplace
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 font-merriweather max-w-2xl mx-auto">
          Discover and collect timeless knowledge preserved on the blockchain
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search archives..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-eternal-gold"
            />
          </div>
          <Button variant="outline" className="w-full md:w-auto">
            <Filter className="mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_BOOKS.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                <img src={book.image} alt={book.title} className="object-cover w-full h-48" />
              </div>
              <div className="p-4">
                <h3 className="font-montserrat font-semibold text-lg mb-1 text-eternal-blue">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-eternal-blue/10 text-eternal-blue px-2 py-1 rounded-full text-sm">
                    {book.category}
                  </span>
                  <span className="font-semibold text-eternal-gold">{book.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};