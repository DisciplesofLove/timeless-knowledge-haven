import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { FileUploader } from "./upload/FileUploader";
import { MetadataForm } from "./upload/MetadataForm";
import { NFTSettings } from "./upload/NFTSettings";

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
      if (mintAsNFT) {
        toast.loading("Preparing to mint NFT...");
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
          <FileUploader
            dragActive={dragActive}
            file={file}
            setFile={setFile}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleChange={handleChange}
          />

          <MetadataForm required={true} />

          <NFTSettings
            mintAsNFT={mintAsNFT}
            setMintAsNFT={setMintAsNFT}
            nftSettings={nftSettings}
            setNftSettings={setNftSettings}
          />

          <div className="pt-4">
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90"
            >
              {mintAsNFT ? 'Upload and Mint NFT' : 'Upload to Archive'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};