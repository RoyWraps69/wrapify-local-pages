
import React from 'react';
import { Upload, FileUp, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const UploadArtwork: React.FC = () => {
  const handleUploadClick = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.jpg,.jpeg,.png,.pdf,.ai,.eps,.psd';
    fileInput.multiple = true;
    
    fileInput.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        // In a real implementation, you would upload these files to your server
        // For now, we'll just show a success toast
        toast.success(`${target.files.length} file(s) selected for upload`, {
          description: "Our team will review your artwork once submitted."
        });
        
        // Log the files (for demonstration purposes)
        console.log('Files selected:', target.files);
      }
    };
    
    fileInput.click();
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-wrap-red/10 p-3 rounded-full">
            <Image className="w-6 h-6 text-wrap-red" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-wrap-blue">Have Your Own Artwork?</h3>
            <p className="text-wrap-grey">Upload your design files for our team to review</p>
          </div>
        </div>
        
        <Button 
          onClick={handleUploadClick}
          className="bg-wrap-blue hover:bg-wrap-blue-dark text-white font-medium"
        >
          <FileUp className="w-4 h-4 mr-2" />
          Upload Artwork Files
        </Button>
      </div>
      
      <div className="mt-4 text-sm text-wrap-grey">
        <p>Accepted formats: JPG, PNG, PDF, AI, EPS, PSD. Max file size: 25MB per file.</p>
        <p className="mt-1">For best results, provide vector files (AI, EPS) with outlined fonts.</p>
      </div>
    </div>
  );
};

export default UploadArtwork;
