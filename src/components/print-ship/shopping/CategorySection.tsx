
import React from 'react';

interface CategorySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CategorySection = ({ title, description, children }: CategorySectionProps) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
          {title}
        </h2>
        <p className="text-wrap-grey max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      {children}
    </div>
  </section>
);

export default CategorySection;
