
import React from 'react';
import { Helmet } from 'react-helmet-async';
import FeedDisplay from '../components/FeedDisplay';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';

const Feeds = () => {
  return (
    <>
      <Helmet>
        <title>Feeds | Wrapping The World</title>
        <meta name="description" content="Latest feeds from our partners and resources" />
      </Helmet>

      <Navbar />
      
      <div className="container mx-auto py-10 pt-24">
        <h1 className="text-3xl font-bold mb-8 text-center">Latest Feeds</h1>
        <FeedDisplay />
      </div>
      
      <Footer />
    </>
  );
};

export default Feeds;
