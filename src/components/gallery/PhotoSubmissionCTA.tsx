
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Upload } from 'lucide-react';

interface PhotoSubmissionCTAProps {
  townName?: string;
}

const PhotoSubmissionCTA: React.FC<PhotoSubmissionCTAProps> = ({ townName = 'Chicago' }) => {
  return (
    <div className="mt-12 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
          <div className="w-20 h-20 bg-wrap-blue/10 rounded-full flex items-center justify-center">
            <Camera className="h-10 w-10 text-wrap-blue" />
          </div>
        </div>
        <div className="md:w-3/4 text-center md:text-left md:pl-6">
          <h3 className="text-xl font-semibold text-wrap-blue mb-2">
            Got a wrapped vehicle? Share your photos!
          </h3>
          <p className="text-wrap-grey mb-4">
            Submit photos of your wrapped vehicle and get featured in our gallery. Plus, receive a 10% discount on your next service!
          </p>
          <Link 
            to="/submit-photos" 
            className="inline-flex items-center px-5 py-2.5 bg-wrap-red text-white rounded-md hover:bg-wrap-red/90 transition-colors"
          >
            <Upload className="mr-2 h-4 w-4" />
            Submit Your Vehicle Photos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoSubmissionCTA;
