
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface InsurancePageLayoutProps {
  children: React.ReactNode;
}

const InsurancePageLayout: React.FC<InsurancePageLayoutProps> = ({
  children
}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default InsurancePageLayout;
