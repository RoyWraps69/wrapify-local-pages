
import React from 'react';
import { Link } from 'react-router-dom';

interface TownDescriptionProps {
  townName: string;
  townData: any;
}

const TownDescription: React.FC<TownDescriptionProps> = ({ townName, townData }) => {
  // Generate town-specific content
  const { description, population, businessCount, distance, state } = townData;
  
  return (
    <section className="py-16 bg-gradient-to-b from-wrap-blue/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
            Premium Vehicle Wraps & Ceramic Coatings in {townName}, {state}
          </h2>
          
          <p className="mb-6">
            Welcome to Chicago Fleet Wraps, your premier provider of <strong>professional vehicle wraps</strong>, 
            <strong>ceramic coatings</strong>, and <strong>paint protection film</strong> in {townName}. 
            Located just {distance} miles from Chicago, {townName} is home to {population.toLocaleString()} residents 
            and approximately {businessCount?.toLocaleString() || 'numerous'} businesses that can benefit from our 
            premium vehicle enhancement services. Our team delivers exceptional quality and service to both commercial 
            fleet owners and individual vehicle enthusiasts throughout {townName} and surrounding areas.
          </p>
          
          <p className="mb-6">
            {description} Chicago Fleet Wraps offers complete <strong>vehicle transformation solutions</strong> including 
            <strong>commercial fleet branding</strong>, <strong>color change wraps</strong>, <strong>hydrophobic ceramic coatings</strong>,
            and <strong>self-healing paint protection film</strong> to protect your investment from {townName}'s varied 
            weather conditions and daily driving hazards. Whether you're looking to increase your business visibility with
            eye-catching <strong>mobile advertising</strong> or protect your personal vehicle with the latest in 
            <strong>automotive surface protection technology</strong>, our experienced team has the expertise to deliver 
            outstanding results.
          </p>
          
          <div className="my-8 p-6 bg-white rounded-lg shadow-soft border border-wrap-blue/10">
            <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">
              Vehicle Wrap & Protection Services Available in {townName}:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Commercial Fleet Wraps
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Business Vehicle Branding
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Full & Partial Vehicle Wraps
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Color Change Wraps
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Premium Ceramic Coating
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Paint Protection Film (PPF)
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Custom Vehicle Graphics
              </li>
              <li className="flex items-center gap-2 text-wrap-grey">
                <span className="text-wrap-red">✓</span> Vehicle Design Consultation
              </li>
            </ul>
          </div>
          
          <p className="mb-6">
            {townName} businesses are discovering the incredible <strong>return on investment</strong> that professional 
            <strong>vehicle wraps</strong> provide. With thousands of impressions generated daily as your vehicles travel 
            throughout {townName} and the greater Chicago area, <strong>fleet branding</strong> transforms ordinary 
            company vehicles into powerful <strong>mobile billboards</strong> at a fraction of the cost of traditional 
            advertising. From construction companies and service providers to retail delivery fleets, our custom 
            <strong>vehicle branding solutions</strong> help {townName} businesses stand out in a competitive marketplace.
          </p>
          
          <p className="mb-6">
            For personal vehicles, our <strong>ceramic coating services</strong> and <strong>paint protection film</strong> provide 
            unmatched protection against {townName}'s harsh winter conditions, road salt, UV exposure, and environmental 
            contaminants. These advanced <strong>protective treatments</strong> keep your vehicle looking showroom-new for 
            years while making maintenance easier with <strong>hydrophobic properties</strong> that repel water, dirt, and grime.
            Our <strong>color change wraps</strong> allow {townName} vehicle owners to completely transform their cars with 
            premium vinyl in countless colors and finishes, from subtle matte to eye-catching metallics and glossy finishes.
          </p>
          
          <div className="text-center mt-8">
            <Link 
              to="/contact" 
              className="inline-block bg-wrap-red text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
            >
              Get a Free Quote for Your {townName} Vehicle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownDescription;
