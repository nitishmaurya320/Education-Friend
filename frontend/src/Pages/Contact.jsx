import React, { useState } from 'react'
import { createContact } from '../api/contactService';
import { toast } from 'sonner';

const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });
  const onChange=(e)=>{
    const {name,value}=e.target 
    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit=async (e)=>{
   
    e.preventDefault()
    const respone=await createContact(formData)
    console.log(respone)
    toast.success(respone.message)
    setFormData({
      name:"",
      email:"",
      subject:"",
      message:""
    })
    
  }



  return (
    <div className='h-full mt-[100px] flex flex-col p-5 px-5 md:px-[100px]'>
        <div className=' justify-center items-center flex-col '>
            <h1 className='text-center text-4xl font-bold text-green-500'>Contact Us</h1>
            <p className='text-[17px] text-center mt-2'>Any question or remarks? Just write us a message</p>
            </div>
        <div className='flex  md:flex-row flex-col bg-white rounded-2xl shadow-md '>
            <div className='w-full md:w-1/2  rounded-r-2xl p-10 justify-center items-center'>
            <h1 className='text-3xl font-bold '>Contact Information</h1>
            <div className='gap-3 md:gap-8 flex flex-col mt-5 md:mt-20'>
              <p>📧 <strong>Email:</strong> educationfriend25@gmail.com</p>
              <p>📞 <strong>Phone:</strong> +91-7307627617</p>
              <p>📍 <strong>Location:</strong> Noida, Uttar Pradesh, India (Remote/Online Support)</p>
          </div>

            
            

        </div>
      <div className='w-full md:w-1/2  p-3 md:p-10 justify-center items-center flex'>
        <div className='w-full md:w-4/5'>
           <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col">
                  <label className="text-[18px] font-medium mb-2">Full Name</label>
                  <input
                    className="outline-none p-2 border border-gray-300 rounded focus:ring-1 focus:ring-green-400"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[18px] font-medium mb-2">Email Address</label>
                  <input
                    className="outline-none p-2 border border-gray-300 rounded focus:ring-1 focus:ring-green-400"
                    type="email"
                    onChange={onChange}
                     name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[18px] font-medium mb-2">Subject</label>
                  <input
                    className="outline-none p-2 border border-gray-300 rounded focus:ring-1 focus:ring-green-400"
                    type="text"
                     name="subject"
                    value={formData.subject}
                    onChange={onChange}
                    placeholder="Subject"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[18px] font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="p-2 border border-gray-300 rounded outline-none resize-none focus:ring-1 focus:ring-green-400"
                    onChange={onChange}
                     name="message"
                    value={formData.message}
                    placeholder="Write your message here"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition font-semibold"
                >
                  🚀 Send Message
                </button>
</form>

        </div>
      </div>

        </div>
        
    </div>
  )
}

export default Contact
