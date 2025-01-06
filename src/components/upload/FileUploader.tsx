import { UploadIcon, X } from "lucide-react";

interface FileUploaderProps {
  dragActive: boolean;
  file: File | null;
  setFile: (file: File | null) => void;
  handleDrag: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileUploader = ({
  dragActive,
  file,
  setFile,
  handleDrag,
  handleDrop,
  handleChange,
}: FileUploaderProps) => {
  return (
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
      <p className="text-white mb-2">Drag and drop your file here, or click to select</p>
      <p className="text-gray-400 text-sm">Supported formats: PDF, ePub, Word, Images</p>
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
  );
};