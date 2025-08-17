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
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(null); // null until selected
  const [loading,setLoading]=useState(false)

  const handleDonate = async () => {
    setLoading(true)
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    setLoading(false)

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
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
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
              donor: { name, email, amount },
            }
          );

          if (verify.data.success) {
            alert("✅ Donation Successful! Thank you!");
            navigate("/donation-success");
          } else {
            alert("❌ Payment Verification Failed");
          }
        },
        prefill: {
          name,
          email,
        },
        theme: {
          color: "#16a34a",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
    {/* overlay */}
    <div className={`h-screen w-screen ${loading?"block":"hidden"} bg-black flex justify-center items-center opacity-40 fixed z-2000 top-0`}>
       <div className="w-10 h-10 border-2  border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
    <div className="flex flex-col md:flex-row mt-[70px] md:mt[0px] justify-center items-center min-h-screen bg-gray-100 p-6">
      {/* Left Side Text */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Thank You for Considering a Donation 💚
        </h1>
        <p className="text-gray-700 mb-3">
          Your contribution helps us continue building tools, resources, and a
          supportive community for students and learners across the globe.
        </p>
        <p className="text-gray-700 mb-3">
          Every single donation, no matter the amount, makes a huge difference
          in empowering education and innovation.
        </p>
        <p className="text-gray-700 mb-3">
          With your help, we can create more opportunities, improve resources,
          and provide better learning experiences.
        </p>
        <p className="text-gray-700 mb-3">
          Together, we can make education accessible and impactful for
          everyone.
        </p>
        <p className="text-gray-700">
          Thank you for your kindness and generosity—it truly means a lot.
        </p>
      </div>

      {/* Right Side Donation Card */}
      <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
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
        <div className="flex gap-3 mb-6 flex-wrap">
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
          {loading?`Donating...`:`Donate ${amount||""}`}
        </button>
      </div>
    </div>
    </>
  );
}
