import React from 'react'
import { useAuth } from '../AuthProvider'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'sonner';

const Profile = () => {
    const { user,logout,loading } = useAuth();
    const [userData,setUserData]=useState(null);
  const navigate = useNavigate();
  

 

  useEffect(()=>{
     
    const profile=async (id)=>{
    try {
      const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/profile/${id}`)
      console.log(res)
     setUserData(res.data.user)
     console.log(res.data.user)
     
    } catch (error) {
     console.log(error)
    }
  }
  console.log(user)
  if (!loading) {
      profile(user.user.id);
  }
  },[user,loading])
   

  const handleLogout = async () => {
    
    await logout();
    navigate("/");
    toast.success("logout successful")  
    
  };
  

  

  return (
    <div className="max-w-md mx-auto  p-6 border mt-[100px] h-screen rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Welcome,{userData?.name}!</h1>
      <p>Email {userData?.email}</p>
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile
