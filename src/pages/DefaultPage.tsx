
import React from 'react';

const DefaultPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Test Page
        </h1>
        <p className="text-gray-600 mb-4">
          If you can see this content, basic rendering is working correctly.
        </p>
        <div className="pt-4 border-t border-gray-200">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => console.log('Button clicked!')}
          >
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
