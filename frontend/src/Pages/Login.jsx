import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
    
  const { login } = useAuth();

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      
        const result=await login(email, password);
        
        setError(result)
      
      
      
      setLoading(false);
      navigate("/")
    };


  return (
    <div className="min-h-screen flex flex-col mt-[50px] md:flex-row items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 px-5 md:px-20 py-10">
      
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 md:px-12">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
        <p className="text-gray-600 mt-1">Login to continue your journey</p>

        <form onSubmit={handleLogin}  className="space-y-6 mt-8 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <label className="block mb-1 text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          {
            error&&<p className='text-[13px] text-red-500'>{error}</p>
          }

          {
            loading?<button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
          >
            Loging in....
          </button>:<button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
          >
            🚀 Login
          </button>
          }

          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <a href="/signup" className="text-green-600 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>

      {/* Right Side - Image + Text */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center flex-col mt-10 md:mt-0">
        <img
          src="/login.png"
          alt="Login Visual"
          className="rounded-xl  w-[70%] h-auto object-cover"
        />
        <p className="mt-6 text-center text-gray-700 font-semibold text-lg px-8">
          “Where ambition meets opportunity — sign in and take the leap.”
        </p>
      </div>
    </div>
  );
};

export default Login;
