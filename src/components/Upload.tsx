import { useState } from "react";
import { Upload as UploadIcon, X, Image, Coins } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { toast } from "sonner";

export const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [mintAsNFT, setMintAsNFT] = useState(false);
  const [nftSettings, setNftSettings] = useState({
    price: "",
    royaltyPercentage: "10",
    network: "polygon",
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulated NFT minting process
      if (mintAsNFT) {
        toast.loading("Preparing to mint NFT...");
        // Here you would integrate with actual blockchain functionality
        await new Promise(resolve => setTimeout(resolve, 2000));
        toast.success("NFT minted successfully!");
      } else {
        toast.success("Document uploaded successfully!");
      }
    } catch (error) {
      toast.error("Error during upload process");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5] min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-white text-center mb-8">
          Upload Your Work
        </h2>
        <p className="text-xl text-gray-200 text-center mb-12 font-merriweather max-w-2xl mx-auto">
          Share your knowledge with the world through our blockchain-powered platform
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20">
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center mb-8 transition-colors
              ${dragActive ? "border-[#D946EF]" : "border-white/30"}
              ${dragActive ? "bg-[#D946EF]/10" : "bg-white/5"}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleChange}
              accept=".pdf,.epub,.doc,.docx,.txt,image/*"
            />
            <UploadIcon className="w-12 h-12 mx-auto mb-4 text-[#D946EF]" />
            <p className="text-white mb-2">
              Drag and drop your file here, or click to select
            </p>
            <p className="text-gray-400 text-sm">
              Supported formats: PDF, ePub, Word, Images
            </p>
            {file && (
              <div className="mt-4 p-2 bg-white/10 rounded flex items-center justify-between">
                <span className="text-white truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-white">Title</Label>
              <Input id="title" className="bg-white/5 border-white/20 text-white" required />
            </div>
            
            <div>
              <Label htmlFor="author" className="text-white">Author/Creator</Label>
              <Input id="author" className="bg-white/5 border-white/20 text-white" required />
            </div>
            
            <div>
              <Label htmlFor="description" className="text-white">Description</Label>
              <Textarea id="description" className="bg-white/5 border-white/20 text-white" required />
            </div>
            
            <div>
              <Label htmlFor="category" className="text-white">Category</Label>
              <Input 
                id="category" 
                className="bg-white/5 border-white/20 text-white" 
                placeholder="e.g., Fiction, Academic, Legal, Art" 
                required 
              />
            </div>
            
            <div>
              <Label htmlFor="tags" className="text-white">Keywords/Tags</Label>
              <Input 
                id="tags" 
                className="bg-white/5 border-white/20 text-white" 
                placeholder="Separate tags with commas" 
              />
            </div>
            
            <div>
              <Label htmlFor="language" className="text-white">Language</Label>
              <Input id="language" className="bg-white/5 border-white/20 text-white" required />
            </div>

            <div className="border-t border-white/20 pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-[#D946EF]" />
                  <Label htmlFor="mint-nft" className="text-white font-semibold">Mint as NFT</Label>
                </div>
                <Switch
                  id="mint-nft"
                  checked={mintAsNFT}
                  onCheckedChange={setMintAsNFT}
                />
              </div>

              {mintAsNFT && (
                <div className="space-y-4 animate-in slide-in-from-top duration-300">
                  <div>
                    <Label htmlFor="price" className="text-white">Price (ETH)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.001"
                      min="0"
                      className="bg-white/5 border-white/20 text-white"
                      value={nftSettings.price}
                      onChange={(e) => setNftSettings({ ...nftSettings, price: e.target.value })}
                      required={mintAsNFT}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="royalty" className="text-white">Royalty Percentage</Label>
                    <Input
                      id="royalty"
                      type="number"
                      min="0"
                      max="100"
                      className="bg-white/5 border-white/20 text-white"
                      value={nftSettings.royaltyPercentage}
                      onChange={(e) => setNftSettings({ ...nftSettings, royaltyPercentage: e.target.value })}
                      required={mintAsNFT}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="network" className="text-white">Blockchain Network</Label>
                    <select
                      id="network"
                      className="w-full h-10 rounded-md border bg-white/5 border-white/20 text-white px-3 py-2"
                      value={nftSettings.network}
                      onChange={(e) => setNftSettings({ ...nftSettings, network: e.target.value })}
                      required={mintAsNFT}
                    >
                      <option value="polygon">Polygon</option>
                      <option value="ethereum">Ethereum</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90"
              >
                {mintAsNFT ? 'Upload and Mint NFT' : 'Upload to Archive'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};