import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">NCR Housing</div>
              <div className="text-xs text-gray-500">Vasundhara, Ghaziabad</div>
            </div>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#emi-calculator" className="text-gray-700 hover:text-blue-600 transition font-medium">EMI Calculator</a>
            <a href="#price-trends" className="text-gray-700 hover:text-blue-600 transition font-medium">Price Trends</a>
            <a href="#distance" className="text-gray-700 hover:text-blue-600 transition font-medium">Connectivity</a>
           
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#emi-calculator" className="block py-2 text-gray-700">EMI Calculator</a>
            <a href="#price-trends" className="block py-2 text-gray-700">Price Trends</a>
            <a href="#distance" className="block py-2 text-gray-700">Location</a>
            <a href="tel:8097892731" className="block bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center">
              📞 Call 8097892731
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}