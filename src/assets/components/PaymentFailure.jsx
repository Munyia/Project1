import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFailure = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-red-600">Payment Failed</h2>
      
      <div className="text-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 mx-auto text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
          />
        </svg>
        <p className="text-xl font-semibold text-gray-700">Oops! Something went wrong.</p>
        <p className="text-gray-600">Your payment was not processed successfully. Please try again.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Error Details:</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li><strong>Error Code:</strong> 500</li>
          <li><strong>Message:</strong> Payment gateway error. Please contact support if the issue persists.</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
        <Link to="/support" className="text-blue-600 hover:underline">Contact Support</Link>
      </div>
    </div>
  );
};

export default PaymentFailure;
