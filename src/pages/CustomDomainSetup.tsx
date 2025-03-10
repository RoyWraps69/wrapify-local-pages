
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Clipboard, CheckCircle, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CustomDomainSetup = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied to your clipboard",
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-wrap-blue mb-4">Custom Domain Setup</h1>
          <p className="text-lg text-wrap-grey mb-12 max-w-3xl">
            Follow these steps to use your own domain with Wrapping The World.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-wrap-blue mb-6">Setting Up Your Domain with Netlify</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-wrap-blue mb-3 flex items-center">
                  <span className="bg-wrap-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Log in to your Netlify account
                </h3>
                <p className="ml-11 text-wrap-grey">
                  Sign in to your Netlify account where your site is deployed. If you haven't deployed yet, follow the <Link to="/deployment-guide" className="text-wrap-red hover:underline">deployment guide</Link> first.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-wrap-blue mb-3 flex items-center">
                  <span className="bg-wrap-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Go to Domain Management
                </h3>
                <p className="ml-11 text-wrap-grey">
                  Navigate to your site, then go to <strong>Site settings → Domain management → Custom domains</strong>.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-wrap-blue mb-3 flex items-center">
                  <span className="bg-wrap-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                  Add your custom domain
                </h3>
                <p className="ml-11 text-wrap-grey">
                  Click on <strong>Add custom domain</strong> and enter your domain name (e.g., wrappingtheworld.com).
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-wrap-blue mb-3 flex items-center">
                  <span className="bg-wrap-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                  Configure DNS settings
                </h3>
                <p className="ml-11 text-wrap-grey mb-4">
                  You have two options:
                </p>
                
                <div className="ml-11 bg-slate-50 p-5 rounded-md mb-3">
                  <h4 className="font-medium text-wrap-blue mb-2">Option A: Use Netlify DNS (Recommended)</h4>
                  <p className="text-wrap-grey mb-3">
                    Let Netlify manage your DNS by changing your nameservers at your domain registrar to Netlify's nameservers:
                  </p>
                  <div className="bg-slate-100 p-3 rounded flex justify-between items-center mb-2">
                    <code className="text-sm">dns1.p05.nsone.net</code>
                    <button 
                      onClick={() => copyToClipboard("dns1.p05.nsone.net")}
                      className="text-wrap-grey hover:text-wrap-blue"
                    >
                      <Clipboard size={16} />
                    </button>
                  </div>
                  <div className="bg-slate-100 p-3 rounded flex justify-between items-center mb-2">
                    <code className="text-sm">dns2.p05.nsone.net</code>
                    <button 
                      onClick={() => copyToClipboard("dns2.p05.nsone.net")}
                      className="text-wrap-grey hover:text-wrap-blue"
                    >
                      <Clipboard size={16} />
                    </button>
                  </div>
                  <div className="bg-slate-100 p-3 rounded flex justify-between items-center mb-2">
                    <code className="text-sm">dns3.p05.nsone.net</code>
                    <button 
                      onClick={() => copyToClipboard("dns3.p05.nsone.net")}
                      className="text-wrap-grey hover:text-wrap-blue"
                    >
                      <Clipboard size={16} />
                    </button>
                  </div>
                  <div className="bg-slate-100 p-3 rounded flex justify-between items-center">
                    <code className="text-sm">dns4.p05.nsone.net</code>
                    <button 
                      onClick={() => copyToClipboard("dns4.p05.nsone.net")}
                      className="text-wrap-grey hover:text-wrap-blue"
                    >
                      <Clipboard size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="ml-11 bg-slate-50 p-5 rounded-md">
                  <h4 className="font-medium text-wrap-blue mb-2">Option B: External DNS</h4>
                  <p className="text-wrap-grey mb-3">
                    Add these records at your domain registrar:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="p-2 text-left">Record Type</th>
                          <th className="p-2 text-left">Name</th>
                          <th className="p-2 text-left">Value</th>
                          <th className="p-2 text-left">TTL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="p-2">A</td>
                          <td className="p-2">@</td>
                          <td className="p-2">75.2.60.5</td>
                          <td className="p-2">Auto</td>
                        </tr>
                        <tr>
                          <td className="p-2">CNAME</td>
                          <td className="p-2">www</td>
                          <td className="p-2">your-netlify-site.netlify.app</td>
                          <td className="p-2">Auto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-wrap-blue mb-3 flex items-center">
                  <span className="bg-wrap-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                  Wait for DNS propagation
                </h3>
                <p className="ml-11 text-wrap-grey">
                  DNS changes can take up to 48 hours to propagate globally, though they often complete within a few hours. You can check status in Netlify's domain settings.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-wrap-blue mb-3 flex items-center">
                  <span className="bg-wrap-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                  Enable HTTPS
                </h3>
                <p className="ml-11 text-wrap-grey">
                  Netlify automatically provisions SSL certificates via Let's Encrypt. Ensure HTTPS is enabled in your domain settings.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-wrap-blue mb-6">Migrating from Another Platform</h2>
            <p className="text-wrap-grey mb-4">
              If you're transferring your domain from another hosting provider, follow these steps:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-wrap-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-wrap-grey">Back up all content from your current host before making any changes</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-wrap-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-wrap-grey">Set up 301 redirects from your old URLs to new ones if your URL structure is changing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-wrap-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-wrap-grey">Lower the TTL values on your DNS records to 300 seconds (5 minutes) 24-48 hours before migration</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-wrap-blue mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-wrap-grey">After migration, restore TTL values to normal (typically 3600 seconds or higher)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-wrap-blue mb-6">Need Help?</h2>
            <p className="text-wrap-grey mb-6">
              If you encounter any issues during domain setup, our support team is here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-wrap-blue/90 transition-colors"
              >
                Contact Support <ArrowRight size={16} className="ml-2" />
              </Link>
              <a 
                href="https://docs.netlify.com/domains-https/custom-domains/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center border border-wrap-blue text-wrap-blue px-6 py-3 rounded-md hover:bg-wrap-blue/10 transition-colors"
              >
                Netlify Documentation <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CustomDomainSetup;
