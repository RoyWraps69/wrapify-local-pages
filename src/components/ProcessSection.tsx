
import React from 'react';
import { CheckCircle, FileText, PenTool, Truck, Wrench, Award } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  townName?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ townName = 'Chicago' }) => {
  const steps: ProcessStep[] = [
    {
      icon: <FileText className="h-10 w-10 text-wrap-red" />,
      title: "1. Talk About Your Needs",
      description: `We start by asking what you want. Our ${townName} experts will help you pick materials and designs that work for you.`
    },
    {
      icon: <PenTool className="h-10 w-10 text-wrap-red" />,
      title: "2. Design Your Wrap",
      description: `Our design team makes custom graphics for your brand. We'll show you what your car will look like when it's done.`
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-wrap-red" />,
      title: "3. Get Your OK",
      description: `Once you like the design, we lock in all details before starting, so your ${townName} car wrap will be just what you want.`
    },
    {
      icon: <Truck className="h-10 w-10 text-wrap-red" />,
      title: "4. Make Your Wrap",
      description: `Using top materials, we print and get your car wrap ready with careful attention to detail for a perfect fit.`
    },
    {
      icon: <Wrench className="h-10 w-10 text-wrap-red" />,
      title: "5. Put It On Your Car",
      description: `Our skilled installers in ${townName} carefully put on your wrap, making sure it lines up perfectly and looks smooth.`
    },
    {
      icon: <Award className="h-10 w-10 text-wrap-red" />,
      title: "6. Final Check",
      description: `Before giving back your car, we do a thorough check to make sure your ${townName} car wrap is perfect and meets our high standards.`
    }
  ];

  return (
    <section className="py-20 bg-wrap-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="text-4xl font-serif font-semibold mb-4 text-white">
            Our Car Wrap Process
          </h2>
          <p className="text-wrap-light/80 max-w-2xl mx-auto text-lg">
            Our proven steps make sure every car wrap in {townName} turns out great.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card p-6 h-full"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-wrap-light/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
