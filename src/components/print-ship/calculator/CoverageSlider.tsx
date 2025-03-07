
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CoverageSliderProps {
  coverage: number;
  setCoverage: (coverage: number) => void;
}

const CoverageSlider: React.FC<CoverageSliderProps> = ({
  coverage,
  setCoverage,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
      <label className="block text-wrap-blue font-medium mb-3 flex items-center">
        Coverage: {Math.round(coverage * 100)}%
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-56 text-sm">Adjust how much of your vehicle you want wrapped, from partial to full coverage.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </label>
      <input 
        type="range" 
        min="0.25" 
        max="1" 
        step="0.05" 
        value={coverage}
        onChange={(e) => setCoverage(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-wrap-red"
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>Partial (25%)</span>
        <span>Half (50%)</span>
        <span>Full (100%)</span>
      </div>
      
      {/* Visual representation of coverage */}
      <div className="mt-3 h-8 bg-gray-100 rounded-lg overflow-hidden relative">
        <div 
          className="h-full bg-gradient-to-r from-wrap-blue to-wrap-red transition-all duration-300"
          style={{ width: `${coverage * 100}%` }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <span className="text-xs font-medium text-white drop-shadow-md">
            {coverage < 0.4 ? 'Partial Wrap' : coverage < 0.75 ? 'Half Wrap' : 'Full Wrap'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoverageSlider;
