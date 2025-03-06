
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemberDashboard from '@/components/membership/MemberDashboard';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';

const MemberDashboardPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Member dashboard for Wrapping The World premium members." />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Wrapping The World | Member Dashboard"
        pageDescription="Access your Wrapping The World member dashboard, view your benefits, orders, and membership status."
        pageUrl="https://wrappingtheworld.com/member-dashboard"
      />
      
      <Navbar />
      
      <main className="pt-28 pb-16 bg-gray-50">
        <MemberDashboard />
      </main>
      
      <Footer />
    </>
  );
};

export default MemberDashboardPage;
