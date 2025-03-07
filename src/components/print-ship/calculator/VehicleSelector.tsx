
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { vehicleSizes, VehicleSize } from '@/utils/vehiclePricingData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface VehicleSelectorProps {
  selectedVehicle: VehicleSize;
  setSelectedVehicle: (vehicle: VehicleSize) => void;
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({
  selectedVehicle,
  setSelectedVehicle,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
      <label className="block text-wrap-blue font-medium mb-2 flex items-center">
        Vehicle Size
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-56 text-sm">Select your vehicle type to calculate the total cost including installation.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </label>
      <select 
        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-wrap-blue focus:border-wrap-blue"
        value={selectedVehicle.category}
        onChange={(e) => {
          const selected = vehicleSizes.find(v => v.category === e.target.value);
          if (selected) setSelectedVehicle(selected);
        }}
      >
        {vehicleSizes.map((vehicle) => (
          <option key={vehicle.category} value={vehicle.category}>
            {vehicle.category} - {vehicle.examples}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-600 mt-2">{selectedVehicle.description} (~{selectedVehicle.squareFeet} sq ft)</p>
    </div>
  );
};

export default VehicleSelector;
