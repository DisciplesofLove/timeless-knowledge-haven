import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface MetadataFormProps {
  required: boolean;
}

export const MetadataForm = ({ required }: MetadataFormProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="title" className="text-white">Title</Label>
        <Input id="title" className="bg-white/5 border-white/20 text-white" required={required} />
      </div>
      
      <div>
        <Label htmlFor="author" className="text-white">Author/Creator</Label>
        <Input id="author" className="bg-white/5 border-white/20 text-white" required={required} />
      </div>
      
      <div>
        <Label htmlFor="description" className="text-white">Description</Label>
        <Textarea id="description" className="bg-white/5 border-white/20 text-white" required={required} />
      </div>
      
      <div>
        <Label htmlFor="category" className="text-white">Category</Label>
        <Input 
          id="category" 
          className="bg-white/5 border-white/20 text-white" 
          placeholder="e.g., Fiction, Academic, Legal, Art" 
          required={required} 
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
        <Input id="language" className="bg-white/5 border-white/20 text-white" required={required} />
      </div>
    </div>
  );
};