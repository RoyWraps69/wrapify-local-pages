
import React from 'react';
import FeedDisplay from '../components/FeedDisplay';

const Feeds = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Feed Data</h1>
      <FeedDisplay />
    </div>
  );
};

export default Feeds;
