import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#1A1F2C] to-[#9b87f5] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-montserrat font-bold bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] text-transparent bg-clip-text">
              Eternal Archive
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-montserrat text-sm hover:text-[#D946EF] transition-colors">
              Home
            </Link>
            <Link to="/features" className="font-montserrat text-sm hover:text-[#D946EF] transition-colors">
              Features
            </Link>
            <Link to="/marketplace" className="font-montserrat text-sm hover:text-[#D946EF] transition-colors">
              Marketplace
            </Link>
            <Link to="/community" className="font-montserrat text-sm hover:text-[#D946EF] transition-colors">
              Community
            </Link>
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};