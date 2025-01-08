import { useState } from "react";
import { Menu, Infinity, X, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

export const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const { toast } = useToast();

  const handleConnectWallet = async () => {
    try {
      setIsWalletConnected(true);
      toast({
        title: "Wallet Connected",
        description: "Your wallet has been successfully connected!",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Browse", path: "/marketplace" },
    { title: "Create Listing", path: "/marketplace/create" },
    { title: "My Listings", path: "/marketplace/my-listings" },
    { title: "Community", path: "/community" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#1A1F2C] to-[#9b87f5] text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Infinity 
              className="w-8 h-8 text-[#D946EF] animate-glow-pulse" 
              strokeWidth={2.5}
            />
            <span className="text-2xl font-montserrat font-bold bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] text-transparent bg-clip-text">
              Eternal Archive
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-montserrat text-sm hover:text-[#D946EF] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {isWalletConnected ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-purple-900/20 border-purple-500 text-purple-100 hover:bg-purple-900/30"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connected
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => setIsWalletConnected(false)}
                    className="cursor-pointer"
                  >
                    Disconnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="outline"
                className="bg-purple-900/20 border-purple-500 text-purple-100 hover:bg-purple-900/30"
                onClick={handleConnectWallet}
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}

            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-gradient-to-b from-[#1A1F2C] to-[#9b87f5] border-purple-500">
                  <SheetHeader>
                    <SheetTitle className="text-white">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-8">
                    {menuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="text-white hover:text-[#D946EF] transition-colors py-2 px-4 rounded-md hover:bg-white/10"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};