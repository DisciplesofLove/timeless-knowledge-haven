import { Github, Twitter, Discord } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4 text-[#9b87f5]">Eternal Archive</h3>
            <p className="font-merriweather text-sm text-gray-300">
              Preserving knowledge on the blockchain for generations to come.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-sm mb-4 text-[#D946EF]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Features</a></li>
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-sm mb-4 text-[#D946EF]">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">API</a></li>
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-[#9b87f5] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-sm mb-4 text-[#D946EF]">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Discord className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eternal Archive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};