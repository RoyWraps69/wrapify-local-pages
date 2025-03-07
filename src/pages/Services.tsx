
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

const Services: React.FC = () => {
  console.log('Services page rendering');
  
  useEffect(() => {
    console.log('Services page mounted');
    document.title = 'Services | Wrapping The World';
  }, []);
  
  return (
    <div className="services-page" style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#333333' }}>
      <Navbar />
      <main className="services-content" style={{ padding: '120px 20px 40px', minHeight: '500px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#0F4C81' }}>Our Services</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          This is the services page. If you can see this text, basic rendering is working.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#E63946', marginBottom: '1rem' }}>Vehicle Wraps</h2>
            <p>Transform the look of your vehicle with our professional wrapping services.</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#E63946', marginBottom: '1rem' }}>Color Change Wraps</h2>
            <p>Give your vehicle a complete makeover with our color change wrap options.</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#E63946', marginBottom: '1rem' }}>Commercial Fleet Wraps</h2>
            <p>Brand your business fleet with eye-catching, professional vehicle wraps.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
