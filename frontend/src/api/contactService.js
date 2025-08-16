import axios from 'axios'
export const createContact=async (data)=>{
    const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`,data)

    try {
        return res.data
    } catch (error) {
        return error
    }
}