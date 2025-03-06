
import React from 'react';
import { Link } from 'react-router-dom';
import { towns } from '@/utils/townData';
import { MapPin, Car, Shield, TrendingUp, ArrowRight } from 'lucide-react';

interface TownDescriptionProps {
  townName: string;
  townData: any;
}

const TownDescription: React.FC<TownDescriptionProps> = ({ townName, townData }) => {
  // Generate town-specific content
  const { description, population, businessCount, distance, state, governmentUrl } = townData;
  
  // Function to create a city link
  const CityLink = ({ name }: { name: string }) => {
    const townData = towns.find(t => t.name === name);
    const url = townData?.governmentUrl || `https://www.google.com/search?q=${name}+${state}+government+website`;
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">
        {name}
      </a>
    );
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-wrap-blue/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-wrap-red" size={20} />
            <span className="text-wrap-grey text-sm font-medium">Serving {townName}, {state} and surrounding areas</span>
          </div>
          
          <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
            Premium Vehicle Wraps & Ceramic Coatings in <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a>, {state}
          </h2>
          
          <p className="mb-6">
            Welcome to Chicago Fleet Wraps, your premier provider of <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red font-semibold">professional vehicle wraps</Link>, 
            <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red font-semibold"> ceramic coatings</Link>, and <Link to="/services/paint-protection" className="text-wrap-blue hover:text-wrap-red font-semibold">paint protection film</Link> in <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a>. 
            Located just {distance} miles from <a href="https://www.chicago.gov" target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">Chicago</a>, <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a> is home to {population.toLocaleString()} residents 
            and approximately {businessCount?.toLocaleString() || 'numerous'} businesses that can benefit from our 
            premium vehicle enhancement services. Our team delivers exceptional quality and service to both commercial 
            fleet owners and individual vehicle enthusiasts throughout <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a> and surrounding areas.
          </p>
          
          <p className="mb-6">
            {description} Chicago Fleet Wraps offers complete <strong>vehicle transformation solutions</strong> including 
            <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red font-semibold"> commercial fleet branding</Link>, <Link to="/services/color-change-wraps" className="text-wrap-blue hover:text-wrap-red font-semibold"> color change wraps</Link>, <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red font-semibold"> hydrophobic ceramic coatings</Link>,
            and <Link to="/services/paint-protection" className="text-wrap-blue hover:text-wrap-red font-semibold"> self-healing paint protection film</Link> to protect your investment from <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a>'s varied 
            weather conditions and daily driving hazards. Whether you're looking to increase your business visibility with
            eye-catching <strong>mobile advertising</strong> or protect your personal vehicle with the latest in 
            <strong> automotive surface protection technology</strong>, our experienced team has the expertise to deliver 
            outstanding results.
          </p>
          
          <div className="my-8 p-6 bg-white rounded-lg shadow-soft border border-wrap-blue/10">
            <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue flex items-center">
              <Car className="mr-2 text-wrap-red" size={20} />
              Vehicle Wrap & Protection Services Available in <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline ml-1">{townName}</a>:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red">Commercial Fleet Wraps</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red">Business Vehicle Branding</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red">Full & Partial Vehicle Wraps</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/color-change-wraps" className="text-wrap-blue hover:text-wrap-red">Color Change Wraps</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span>

                <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red">Premium Ceramic Coating</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/paint-protection" className="text-wrap-blue hover:text-wrap-red">Paint Protection Film (PPF)</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/vehicle-graphics" className="text-wrap-blue hover:text-wrap-red">Custom Vehicle Graphics</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/contact" className="text-wrap-blue hover:text-wrap-red">Vehicle Design Consultation</Link>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <Link to="/services" className="inline-flex items-center text-wrap-blue hover:text-wrap-red font-medium">
                See all our {townName} services
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="mb-8 flex flex-col sm:flex-row gap-6">
            <div className="flex-1 bg-wrap-blue/5 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <TrendingUp className="text-wrap-red mr-2" size={20} />
                <h4 className="text-wrap-blue font-semibold text-lg m-0">Business ROI in {townName}</h4>
              </div>
              <p className="text-wrap-grey text-sm leading-relaxed">
                {townName} businesses are discovering the incredible <strong>return on investment</strong> that professional
                <strong> vehicle wraps</strong> provide. With thousands of impressions generated daily as your vehicles travel 
                throughout {townName} and the greater Chicago area, <strong>fleet branding</strong> transforms ordinary 
                company vehicles into powerful <strong>mobile billboards</strong> at a fraction of the cost of traditional 
                advertising. From construction companies and service providers to retail delivery fleets, our custom
                <strong> vehicle branding solutions</strong> help {townName} businesses stand out in a competitive marketplace.
              </p>
              <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red text-sm font-medium inline-flex items-center mt-2">
                Learn about {townName} fleet wraps
                <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
            
            <div className="flex-1 bg-wrap-blue/5 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield className="text-wrap-red mr-2" size={20} />
                <h4 className="text-wrap-blue font-semibold text-lg m-0">Personal Vehicle Protection</h4>
              </div>
              <p className="text-wrap-grey text-sm leading-relaxed">
                For personal vehicles, our <strong>ceramic coating services</strong> and <strong>paint protection film</strong> provide 
                unmatched protection against {townName}'s harsh winter conditions, road salt, UV exposure, and environmental 
                contaminants. These advanced <strong>protective treatments</strong> keep your vehicle looking showroom-new for 
                years while making maintenance easier with <strong>hydrophobic properties</strong> that repel water, dirt, and grime.
                Our <strong>color change wraps</strong> allow {townName} vehicle owners to completely transform their cars with 
                premium vinyl in countless colors and finishes, from subtle matte to eye-catching metallics and glossy finishes.
              </p>
              <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red text-sm font-medium inline-flex items-center mt-2">
                Explore {townName} vehicle protection
                <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/contact" 
              className="inline-block bg-wrap-red text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote for Your {townName} Vehicle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-wrap-grey text-sm mt-2">No obligation • Fast response • {townName} service available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownDescription;
