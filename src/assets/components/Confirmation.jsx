import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Payment Confirmation</h2>
      
      <div className="text-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 mx-auto text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-xl font-semibold text-gray-700">Thank you for your payment!</p>
        <p className="text-gray-600">Your payment was processed successfully.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Transaction Details:</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li><strong>Transaction ID:</strong> 1234567890</li>
          <li><strong>Amount:</strong> $99.99</li>
          <li><strong>Payment Method:</strong> Credit Card</li>
          <li><strong>Date:</strong> September 15, 2024</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/orders" className="text-blue-600 hover:underline">View Your Orders</Link>
      </div>
    </div>
  );
};

export default Confirmation;
