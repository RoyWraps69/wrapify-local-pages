
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { User, Package, CreditCard, ShoppingBag, LogOut, Crown } from 'lucide-react';

const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // In a real app, we would fetch this from API/state
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Wrapping The World',
    isPremium: true,
    premiumUntil: '2024-12-31',
    joinDate: '2023-06-15'
  };

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('isAuthenticated');
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account."
    });
    
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-wrap-blue/10 flex items-center justify-center mb-4">
                <User className="h-10 w-10 text-wrap-blue" />
              </div>
              <h3 className="text-xl font-medium">{user.name}</h3>
              <p className="text-gray-500">{user.email}</p>
              {user.company && <p className="text-gray-500">{user.company}</p>}
              
              {user.isPremium && (
                <div className="mt-2 flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                  <Crown className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Premium Member</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/member-profile')}>
                <User className="h-4 w-4 mr-2" /> My Profile
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/my-orders')}>
                <Package className="h-4 w-4 mr-2" /> My Orders
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/payment-methods')}>
                <CreditCard className="h-4 w-4 mr-2" /> Payment Methods
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/shopping')}>
                <ShoppingBag className="h-4 w-4 mr-2" /> Shop
              </Button>
              <Button variant="destructive" className="w-full justify-start" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </Button>
            </div>
          </div>
          
          {user.isPremium && (
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <Crown className="h-6 w-6 mr-2" />
                <h3 className="text-lg font-medium">Premium Benefits</h3>
              </div>
              <p className="text-white/90 text-sm mb-4">Your premium membership is valid until {new Date(user.premiumUntil).toLocaleDateString()}.</p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Exclusive discounts on all products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Free shipping on all orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Early access to new products</span>
                </li>
              </ul>
              <Button variant="secondary" className="w-full bg-white text-amber-600 hover:bg-white/90">
                Manage Membership
              </Button>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl font-serif font-semibold mb-4">Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-wrap-blue/10 p-4 rounded-lg">
                <h3 className="text-wrap-blue font-medium mb-1">Member Since</h3>
                <p>{new Date(user.joinDate).toLocaleDateString()}</p>
              </div>
              <div className="bg-wrap-blue/10 p-4 rounded-lg">
                <h3 className="text-wrap-blue font-medium mb-1">Membership Status</h3>
                <p>{user.isPremium ? 'Premium' : 'Standard'}</p>
              </div>
            </div>
            
            <h3 className="text-lg font-medium mb-3">Recent Orders</h3>
            <div className="border rounded-lg overflow-hidden">
              <div className="text-center p-6">
                <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                <p className="text-gray-500">No orders yet</p>
                <Button variant="link" className="text-wrap-blue" onClick={() => navigate('/shopping')}>
                  Start Shopping
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-medium mb-4">Membership Perks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Free T-Shirt</h3>
                <p className="text-sm text-gray-600 mb-3">All new premium members get a free Wrapping The World t-shirt!</p>
                <Button variant="outline" className="w-full">Claim Your Free T-Shirt</Button>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Member Discounts</h3>
                <p className="text-sm text-gray-600 mb-3">10% off all products in our online store.</p>
                <Button variant="outline" className="w-full" onClick={() => navigate('/shopping')}>Shop Now</Button>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Training Videos</h3>
                <p className="text-sm text-gray-600 mb-3">Access to exclusive installation training videos.</p>
                <Button variant="outline" className="w-full">Watch Videos</Button>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Member Events</h3>
                <p className="text-sm text-gray-600 mb-3">Invitation to member-only events and workshops.</p>
                <Button variant="outline" className="w-full">View Upcoming Events</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
