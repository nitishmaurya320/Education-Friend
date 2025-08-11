import React from 'react'
import { useAuth } from '../AuthProvider'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.user.name || user.user.id}!</h1>
      <p>Email: {user.user.email || "Not available"}</p>
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
