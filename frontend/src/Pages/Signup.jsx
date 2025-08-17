import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

const Signup = () => {
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')
  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
      e.preventDefault()
      setLoading(true);
      try {
        console.log(name,email,password)
        const response=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`,{name,email,password})
        navigate('/verify-email')
        
        console.log(response.data)
        
      
      } catch (error) {
        console.log(error.response?.data?.message)
        setError(error.response?.data?.message)
        
      }
      
      setLoading(false)

  }
  
  return (
    <div className="min-h-screen flex mt-[50px] flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 px-5 md:px-20 py-10">
      
      {/* left */}
      <div className="w-full md:w-1/2 md:px-12">
        <h1 className="text-3xl font-bold text-gray-800">Join Us Today 👤</h1>
        <p className="text-gray-600 mt-1">Create your account and unlock opportunities</p>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="••••••••"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
         {error&&<p className='text-[12px] text-red-600'>{error}</p>}

         <button 
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg active:bg-green-600 hover:bg-green-600 transition"
          >
            {loading?"Signing in...":"Sign in"}
          </button>
          
          

          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-green-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>

     {/* right */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center flex-col mt-10 md:mt-0">
        <img
          src="/signup.png"
          alt="Signup Visual"
          className="rounded-xl w-[70%] h-auto object-cover"
        />
        <p className="mt-6 text-center text-gray-700 font-semibold text-lg px-8">
          “Sign up today — your dream job could be just one click away.”
        </p>
      </div>
    </div>
  );
};

export default Signup;
