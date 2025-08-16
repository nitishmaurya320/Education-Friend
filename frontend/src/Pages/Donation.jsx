import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  const loadScript = (src) => {
        return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

export default function Donate() {

  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(null); // null until selected

  const handleDonate = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    if (!name || !email || !amount) {
      alert("Please fill all fields and select an amount");
      return;
    }

    try {
      // Create order in backend
      const { data: order } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/donate/create-order`,
        { amount }
      );

      // Razorpay options
      const options = {
        key:import.meta.env.VITE_RAZORPAY_KEY_ID, // Replace with Razorpay Key
        amount: order.amount,
        currency: "INR",
        name: "Education Friend",
        description: "Donation Payment",
        order_id: order.id,
        handler: async function (response) {
          const verify = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/donate/verify-payment`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              donor: { name, email, amount }
            }
          );

          if (verify.data.success) {
            alert("✅ Donation Successful! Thank you!");
            navigate("/donation-success")
          } else {
            alert("❌ Payment Verification Failed");
          }
        },
        prefill: {
          name,
          email
        },
        theme: {
          color: "#16a34a"
        }
      };
      

      const rzp = new window.Razorpay(options);
      rzp.open();
     
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
          Donate to Education Friend
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <h2 className="text-lg font-semibold mb-3">Select Donation Amount:</h2>
        <div className="flex gap-3 mb-6">
          {[5, 10, 20, 50, 100].map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`px-4 py-2 rounded-lg border transition ${
                amount === amt
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-green-600 border-green-400 hover:bg-green-100"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        <button
          onClick={handleDonate}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
        >
          Donate ₹{amount || ""}
        </button>
      </div>
    </div>
  );
}
