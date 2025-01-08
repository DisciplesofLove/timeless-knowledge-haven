import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, ImagePlus } from "lucide-react";

const CreateListingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-montserrat font-bold text-white mb-8">Create New Listing</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Title</label>
                <Input 
                  placeholder="Enter listing title" 
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Description</label>
                <Textarea 
                  placeholder="Describe your digital asset" 
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Price (ETH)</label>
                <Input 
                  type="number" 
                  placeholder="0.00" 
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Upload File</label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                  <ImagePlus className="mx-auto h-12 w-12 text-white/60 mb-4" />
                  <p className="text-white/60">Drag and drop your file here, or click to browse</p>
                </div>
              </div>
              
              <Button className="w-full bg-[#D946EF] hover:bg-[#D946EF]/80">
                <Upload className="w-4 h-4 mr-2" />
                Create Listing
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateListingPage;