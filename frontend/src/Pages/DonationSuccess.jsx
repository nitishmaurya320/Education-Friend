import React from "react";
import { useLocation, Link } from "react-router-dom";

const DonationSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const donorName = queryParams.get("name") || "Supporter";
  const amount = queryParams.get("amount") || "";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center animate-fadeIn">
        {/* Checkmark */}
        <div className="text-green-500 text-6xl mb-4">✔</div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          Thank You for Your Support!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-3">
          {donorName}, your donation{" "}
          {amount && (
            <span className="font-semibold text-gray-800">
              of ₹{amount}
            </span>
          )}{" "}
          to <span className="font-semibold">Education Friend</span> will help
          us provide free resources to students in need.  
          We truly appreciate your generosity ❤️.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white py-2 px-5 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DonationSuccess;
