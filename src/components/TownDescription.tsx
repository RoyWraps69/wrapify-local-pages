
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTowns, Town } from '@/utils/townData';
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
    const towns = getAllTowns();
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
            <span className="text-wrap-grey text-sm font-medium">Serving {townName}, {state} and nearby areas</span>
          </div>
          
          <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
            Top Car Wraps & Coatings in <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a>, {state}
          </h2>
          
          <p className="mb-6">
            Welcome to Wrapping The World, your best choice for <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red font-semibold">car wraps</Link>, 
            <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red font-semibold"> ceramic coatings</Link>, and <Link to="/services/paint-protection-film" className="text-wrap-blue hover:text-wrap-red font-semibold">paint protection</Link> in <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a>. 
            We're just {distance} miles from <a href="https://www.chicago.gov" target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">Chicago</a>. <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a> has {population.toLocaleString()} people 
            and about {businessCount?.toLocaleString() || 'many'} businesses that can use our 
            car wrap services. We help both business owners and car lovers in {townName} and nearby areas.
          </p>
          
          <p className="mb-6">
            {description} Wrapping The World offers total <strong>car makeover solutions</strong> including 
            <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red font-semibold"> business fleet branding</Link>, <Link to="/services/color-change-wraps" className="text-wrap-blue hover:text-wrap-red font-semibold"> color change wraps</Link>, <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red font-semibold"> water-repelling ceramic coatings</Link>,
            and <Link to="/services/paint-protection-film" className="text-wrap-blue hover:text-wrap-red font-semibold"> self-healing paint protection</Link> to shield your car from {townName}'s changing 
            weather and daily driving risks. Whether you want to make your business more visible with
            eye-catching <strong>car ads</strong> or protect your own car with the newest 
            <strong> paint protection tech</strong>, our skilled team can deliver 
            great results.
          </p>
          
          <div className="my-8 p-6 bg-white rounded-lg shadow-soft border border-wrap-blue/10">
            <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue flex items-center">
              <Car className="mr-2 text-wrap-red" size={20} />
              Car Wrap & Protection Services in <a href={governmentUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline ml-1">{townName}</a>:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red">Business Fleet Wraps</Link>
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
                <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red">Top Ceramic Coating</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/paint-protection-film" className="text-wrap-blue hover:text-wrap-red">Paint Protection Film (PPF)</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/services/vehicle-graphics" className="text-wrap-blue hover:text-wrap-red">Custom Car Graphics</Link>
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> 
                <Link to="/contact" className="text-wrap-blue hover:text-wrap-red">Car Design Help</Link>
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
                <h4 className="text-wrap-blue font-semibold text-lg m-0">Business Benefits in {townName}</h4>
              </div>
              <p className="text-wrap-grey text-sm leading-relaxed">
                {townName} businesses are finding out how much <strong>money they can make back</strong> from good
                <strong> car wraps</strong>. With thousands of people seeing your wrapped cars as they drive 
                around {townName} and Chicago, <strong>fleet branding</strong> turns normal 
                work cars into powerful <strong>moving billboards</strong> that cost way less than regular 
                ads. From building companies to service pros to delivery fleets, our custom
                <strong> car branding</strong> helps {townName} businesses stand out from others.
              </p>
              <Link to="/services/commercial-fleet-wraps" className="text-wrap-blue hover:text-wrap-red text-sm font-medium inline-flex items-center mt-2">
                Learn about {townName} fleet wraps
                <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
            
            <div className="flex-1 bg-wrap-blue/5 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield className="text-wrap-red mr-2" size={20} />
                <h4 className="text-wrap-blue font-semibold text-lg m-0">Personal Car Protection</h4>
              </div>
              <p className="text-wrap-grey text-sm leading-relaxed">
                For your own car, our <strong>ceramic coating</strong> and <strong>paint protection film</strong> give 
                the best shield against {townName}'s harsh winter, road salt, sun damage, and road 
                dirt. These top <strong>protective treatments</strong> keep your car looking new for 
                years while making it easier to clean with <strong>water-repelling qualities</strong> that push away water, dirt, and grime.
                Our <strong>color change wraps</strong> let {townName} car owners totally change their cars with 
                high-quality vinyl in many colors and finishes, from flat matte to shiny metallic and glossy looks.
              </p>
              <Link to="/services/ceramic-coatings" className="text-wrap-blue hover:text-wrap-red text-sm font-medium inline-flex items-center mt-2">
                Explore {townName} car protection
                <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/contact" 
              className="inline-block bg-wrap-red text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote for Your {townName} Car</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-wrap-grey text-sm mt-2">No need to buy • Fast answer • {townName} service ready</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownDescription;
