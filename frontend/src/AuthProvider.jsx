import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null); // store user data, not token
  const [loading, setLoading] = useState(true);

  // Check login status when app loads
  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/check-auth`,{withCredentials:true})
      .then(res => {
        if (res.data.loggedIn) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);
console.log(loading)

  const login = async (email, password) => {
    try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, { email, password });
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/check-auth`,{withCredentials:true});
    if (res.data.loggedIn) setUser(res.data.user);
    return "Logged in Successful"
    // console.log(res.data.loggedIn)
    } catch (error) {
    return error.response.data.message
}
  
  };  


  const logout = async () => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/logout`);
    setUser(null);
    window.location.href = '/';
    
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
