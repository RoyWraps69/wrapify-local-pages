
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MapPin, ChevronRight } from "lucide-react";

const LocationsDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">Locations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <div className="bg-slate-100 rounded-lg p-4">
                <div className="mb-2 mt-4 text-lg font-medium text-wrap-blue">
                  Find Us In Your Area
                </div>
                <div className="text-sm text-slate-600 mb-4">
                  Wrapping The World serves communities throughout the Midwest with premium vehicle wrapping services.
                </div>
                <Link
                  to="/locations"
                  className="flex h-9 w-full items-center justify-between rounded-md bg-wrap-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-wrap-red/90 focus:outline-none"
                >
                  <span>View All Locations</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                <div>
                  <div className="mb-2 text-wrap-blue font-semibold flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-wrap-red" />
                    <span>Regions</span>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <Link to="/regions/illinois" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Illinois Region
                    </Link>
                    <Link to="/regions/michigan" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Michigan Region
                    </Link>
                    <Link to="/regions/indiana" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Indiana Region
                    </Link>
                    <Link to="/regions/wisconsin" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Wisconsin Region
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-wrap-blue font-semibold flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-wrap-red" />
                    <span>Popular Cities</span>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <Link to="/locations/chicago" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Chicago, IL
                    </Link>
                    <Link to="/locations/naperville" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Naperville, IL
                    </Link>
                    <Link to="/locations/detroit" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Detroit, MI
                    </Link>
                    <Link to="/locations/indianapolis" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Indianapolis, IN
                    </Link>
                    <Link to="/locations/milwaukee" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Milwaukee, WI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default LocationsDropdown;
