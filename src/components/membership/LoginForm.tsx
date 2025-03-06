
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Lock, User } from 'lucide-react';

interface LoginFormProps {
  isRegister?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ isRegister = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isRegister ? "Registration successful!" : "Login successful!",
        description: isRegister 
          ? "Welcome to Wrapping The World membership!" 
          : "Welcome back to Wrapping The World!",
      });
      
      // In a real app, we would store auth tokens here
      localStorage.setItem('isAuthenticated', 'true');
      
      navigate('/member-dashboard');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-wrap-blue">
        {isRegister ? 'Create Your Membership' : 'Member Login'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegister && (
          <>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-700">Company (Optional)</label>
              <Input
                id="company"
                type="text"
                placeholder="Your company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </>
        )}
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        {!isRegister && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-wrap-blue focus:ring-wrap-blue border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-wrap-blue hover:text-wrap-red">
              Forgot password?
            </a>
          </div>
        )}
        
        <Button
          type="submit"
          className="w-full bg-wrap-blue hover:bg-wrap-blue/90"
          disabled={isLoading}
        >
          {isLoading ? 'Please wait...' : isRegister ? 'Create Account' : 'Sign In'}
        </Button>
        
        {isRegister ? (
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-wrap-blue hover:text-wrap-red">
              Sign in
            </a>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="font-medium text-wrap-blue hover:text-wrap-red">
              Register
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
