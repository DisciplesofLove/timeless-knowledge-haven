import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FilterBarProps {
  onSearch: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onPriceRangeChange: (min: number, max: number) => void;
}

export const FilterBar = ({
  onSearch,
  onCategoryChange,
  onSortChange,
  onPriceRangeChange,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search archives..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D946EF]"
        />
      </div>
      
      <div className="flex gap-4 w-full md:w-auto">
        <Select onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="philosophy">Philosophy</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="art">Art</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Price Range
        </Button>
      </div>
    </div>
  );
};