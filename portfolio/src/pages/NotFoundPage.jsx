import React from 'react';
import { Frown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center text-center 
                    bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100 transition-colors duration-500 p-8">
      <Frown size={96} className="text-blue-600 dark:text-blue-400 mb-6" />
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-8">Page Not Found</h2>
      <p className="text-lg mb-10 max-w-md">
        The page you are looking for doesn't exist or an error occurred.
      </p>
      <Link 
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg 
                   hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
