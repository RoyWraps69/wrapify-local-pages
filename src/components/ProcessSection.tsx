
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
      title: "1. Consultation",
      description: `We start with a detailed discussion about your goals, ideas, and requirements. Our ${townName} experts will guide you through material options and design possibilities.`
    },
    {
      icon: <PenTool className="h-10 w-10 text-wrap-red" />,
      title: "2. Design",
      description: `Our design team creates custom graphics that align with your brand and vision. We'll provide mockups so you can visualize how your vehicle will look in ${townName}.`
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-wrap-red" />,
      title: "3. Approval",
      description: `Once you're satisfied with the design, we finalize all details before proceeding to production, ensuring your ${townName} vehicle wrap will meet your expectations.`
    },
    {
      icon: <Truck className="h-10 w-10 text-wrap-red" />,
      title: "4. Production",
      description: `Using premium materials, we print and prepare your vehicle wrap with meticulous attention to detail for a perfect application in our ${townName} facility.`
    },
    {
      icon: <Wrench className="h-10 w-10 text-wrap-red" />,
      title: "5. Installation",
      description: `Our certified installers in ${townName} carefully apply your wrap, ensuring perfect alignment, smooth finish, and attention to every detail.`
    },
    {
      icon: <Award className="h-10 w-10 text-wrap-red" />,
      title: "6. Final Inspection",
      description: `Before delivery, we conduct a thorough quality check to ensure your ${townName} vehicle wrap is flawless and meets our premium standards.`
    }
  ];

  return (
    <section className="py-20 bg-wrap-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-4xl font-serif font-semibold mb-4 text-white">
            The Chicago Fleet Wraps Process
          </h2>
          <p className="text-wrap-light/80 max-w-2xl mx-auto text-lg">
            Our proven process ensures exceptional results for every vehicle wrap project in {townName}.
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
