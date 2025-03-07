
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Wrench, ChevronRight } from "lucide-react";

const ServicesDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <div className="bg-slate-100 rounded-lg p-4">
                <div className="mb-2 mt-4 text-lg font-medium text-wrap-blue">
                  Professional Wrapping Services
                </div>
                <div className="text-sm text-slate-600 mb-4">
                  We offer premium vehicle wrapping solutions to transform your vehicle or fleet with high-quality vinyl wraps and graphics.
                </div>
                <Link
                  to="/services"
                  className="flex h-9 w-full items-center justify-between rounded-md bg-wrap-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-wrap-red/90 focus:outline-none"
                >
                  <span>View All Services</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                <div>
                  <div className="mb-2 text-wrap-blue font-semibold flex items-center">
                    <Wrench className="mr-1 h-4 w-4 text-wrap-red" />
                    <span>Vehicle Services</span>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <Link to="/services/vehicle-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Vehicle Wraps
                    </Link>
                    <Link to="/services/fleet-graphics" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Fleet Graphics
                    </Link>
                    <Link to="/services/commercial-fleet-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Commercial Fleet Wraps
                    </Link>
                    <Link to="/services/color-change-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Color Change Wraps
                    </Link>
                    <Link to="/services/partial-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Partial Wraps
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-wrap-blue font-semibold flex items-center">
                    <Wrench className="mr-1 h-4 w-4 text-wrap-red" />
                    <span>Protection Services</span>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <Link to="/services/paint-protection-film" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Paint Protection Film
                    </Link>
                    <Link to="/services/ceramic-coatings" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Ceramic Coating
                    </Link>
                    <Link to="/services/vehicle-graphics" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Vehicle Graphics
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

export default ServicesDropdown;
