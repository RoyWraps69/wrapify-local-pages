
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FileText, Users, ChevronRight, GraduationCap } from "lucide-react";

const ResourcesDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-medium">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <div className="bg-slate-100 rounded-lg p-4">
                <div className="mb-2 mt-4 text-lg font-medium text-wrap-blue">
                  Helpful Resources
                </div>
                <div className="text-sm text-slate-600 mb-4">
                  Browse our collection of guides, FAQs, and resources to help you make informed decisions about your vehicle wrap.
                </div>
                <Link
                  to="/training-classes"
                  className="flex h-9 w-full items-center justify-between rounded-md bg-wrap-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-wrap-red/90 focus:outline-none mb-2"
                >
                  <span>Vinyl Wrap Training Classes</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/resources/vinyl-wrap-care-guide"
                  className="flex h-9 w-full items-center justify-between rounded-md bg-wrap-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-wrap-blue/90 focus:outline-none"
                >
                  <span>Vinyl Wrap Care Guide</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                <div>
                  <div className="mb-2 text-wrap-blue font-semibold flex items-center">
                    <FileText className="mr-1 h-4 w-4 text-wrap-red" />
                    <span>Resource Guides</span>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <Link to="/training-classes" className="text-sm text-wrap-grey hover:text-wrap-red flex items-center">
                      <GraduationCap className="mr-1 h-3 w-3" />
                      Training Classes
                    </Link>
                    <Link to="/vinyl-wrap-care-guide" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Vinyl Wrap Care Guide
                    </Link>
                    <Link to="/ceramic-coating-faq" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Ceramic Coating FAQ
                    </Link>
                    <Link to="/design-template-library" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Design Templates
                    </Link>
                    <Link to="/wrap-insurance" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Wrap Insurance
                    </Link>
                    <Link to="/warranty-information" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Warranty Information
                    </Link>
                    <Link to="/wrap-installation-process" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Installation Process
                    </Link>
                    <Link to="/payment-options" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Payment Options
                    </Link>
                    <Link to="/blog" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Blog
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-wrap-blue font-semibold flex items-center">
                    <Users className="mr-1 h-4 w-4 text-wrap-red" />
                    <span>About Us</span>
                  </div>
                  <div className="grid grid-flow-row gap-1">
                    <Link to="/about" className="text-sm text-wrap-grey hover:text-wrap-red">
                      About Us
                    </Link>
                    <Link to="/about/our-team" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Our Team
                    </Link>
                    <Link to="/about/careers" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Careers
                    </Link>
                    <Link to="/testimonials" className="text-sm text-wrap-grey hover:text-wrap-red">
                      Testimonials
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

export default ResourcesDropdown;
