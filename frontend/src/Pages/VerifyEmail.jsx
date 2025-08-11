import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const VerifyEmail = () => {
   const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading,setLoading]=useState(false)
    const navigate=useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and max 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      setError('');
      setSuccessMsg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    if (otp.length !== 6) {
      setError('Please enter a 6-digit OTP');
      setSuccessMsg('');
      return;
    }
    setTimeout(async ()=>{
         try {
        const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/verify-email`,{otp})
        navigate("/email-verification-success")
        setSuccessMsg(response.data.message)
        console.log(response)
    } catch (error) {
        console.log(error.response.data.message)
        setError(error.response.data.message)
    }
    setLoading(false)
    },2000)
   


    

  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-indigo-600 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Verify OTP - Education Friend
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="otp" className="block text-gray-700 mb-2 font-medium">
            Enter 6-digit OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 mb-3 text-center text-xl tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="------"
            maxLength={6}
            autoComplete="one-time-code"
            inputMode="numeric"
          />
          {error && <p className="text-red-600 mb-3">{error}</p>}
          {successMsg && <p className="text-green-600 mb-3">{successMsg}</p>}

          {
            loading?<button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Verifying...
          </button>:<button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Verify OTP
          </button>
          }
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail
