import { useState } from "react";
import { Upload as UploadIcon, X, Image } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

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

  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5] min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-white text-center mb-8">
          Upload Your Work
        </h2>
        <p className="text-xl text-gray-200 text-center mb-12 font-merriweather max-w-2xl mx-auto">
          Share your knowledge with the world through our blockchain-powered platform
        </p>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20">
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
              <Input id="title" className="bg-white/5 border-white/20 text-white" />
            </div>
            
            <div>
              <Label htmlFor="author" className="text-white">Author/Creator</Label>
              <Input id="author" className="bg-white/5 border-white/20 text-white" />
            </div>
            
            <div>
              <Label htmlFor="description" className="text-white">Description</Label>
              <Textarea id="description" className="bg-white/5 border-white/20 text-white" />
            </div>
            
            <div>
              <Label htmlFor="category" className="text-white">Category</Label>
              <Input id="category" className="bg-white/5 border-white/20 text-white" placeholder="e.g., Fiction, Academic, Legal, Art" />
            </div>
            
            <div>
              <Label htmlFor="tags" className="text-white">Keywords/Tags</Label>
              <Input id="tags" className="bg-white/5 border-white/20 text-white" placeholder="Separate tags with commas" />
            </div>
            
            <div>
              <Label htmlFor="language" className="text-white">Language</Label>
              <Input id="language" className="bg-white/5 border-white/20 text-white" />
            </div>

            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90">
                Upload to Archive
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};