import { Book } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export interface NFTListing {
  id: number;
  title: string;
  author: string;
  category: string;
  price: string;
  image: string;
  description: string;
  tokenId?: string;
  blockchain: string;
  likes: number;
  views: number;
}

export const ListingCard = ({ listing }: { listing: NFTListing }) => {
  return (
    <Card className="group bg-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:transform hover:scale-105 border border-white/20">
      <CardHeader className="p-0">
        <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
          <img 
            src={listing.image} 
            alt={listing.title} 
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-montserrat font-semibold text-lg mb-1 text-white group-hover:text-[#D946EF] transition-colors">
          {listing.title}
        </CardTitle>
        <CardDescription>
          <p className="text-gray-300 text-sm mb-2">{listing.author}</p>
          <p className="text-gray-400 text-sm line-clamp-2">{listing.description}</p>
        </CardDescription>
        <div className="flex justify-between items-center mt-4">
          <span className="bg-[#D946EF]/20 text-[#D946EF] px-2 py-1 rounded-full text-sm">
            {listing.category}
          </span>
          <div className="flex flex-col items-end">
            <span className="font-semibold text-[#9b87f5]">{listing.price}</span>
            <span className="text-xs text-gray-400">{listing.blockchain}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex gap-2 text-sm text-gray-400">
          <span>{listing.views} views</span>
          <span>•</span>
          <span>{listing.likes} likes</span>
        </div>
        <Button variant="ghost" size="sm" className="text-[#D946EF] hover:text-[#D946EF]/80">
          <Book className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};