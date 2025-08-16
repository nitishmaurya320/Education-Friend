import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from '../AuthProvider';
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
    
    const [selectedMenu,setSelectedMenu]=useState("Home");
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    const [isScrolled,setIsScrolled]=useState(false);
    const {user,loading}=useAuth();


    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>0);
        };
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    },[])
    const showSidebar=()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }
//     if(loading){
//     return <p>Loading...</p>
// }
    
    const menu=[
        {
            name:"Home",
            path:"/"
        },
         {
            name:"Educational Content",
            path:"/educational-content"
        },

        {
            name:"Jobs",
            path:"/jobs"
        },
        {
            name:"About Us",
            path:"/about"
        },
        {
            name:"Contact",
            path:"/contact"
        },{
            name:"Donate",
            path:"/donate"
        }
        
    ]
    
  return (
    <>
    <div>
        {/* mobile menu */}
        <div className={`fixed    top-0 w-1/2 text-white z-1000  flex-col flex gap-6 p-5 h-screen duration-300 bg-black ${isSidebarOpen?"left-0":"left-[-100%]"}`}>
            <div onClick={showSidebar} className='justify-end flex text-[20px]'><IoCloseSharp/></div>
            {
                menu.map((menu,index)=>{
                    return (
                        <Link to={menu.path}>
                        <h3 onClick={showSidebar} key={index}>{menu.name}</h3>
                        </Link>
                    )
                })
            }
        </div>
        {/* overlay */}
        <div onClick={showSidebar} className={`w-screen fixed top-0 z-999 h-screen  bg-black opacity-55 ${isSidebarOpen?"block":"hidden"}`}>

        </div>
        <div className={`fixed top-0 z-10 p-2 md:p-5 w-full h-[70px] md:h-[100px] bg-gradient-to-r from-black via-gray-900 to-gray-800 flex items-center justify-around ${isScrolled?"shadow-2xl":""}`}>
        <div className='p-3 md:hidden'>
            <HiMiniBars3 onClick={showSidebar} className='text-white text-2xl '/>
        </div>
        
        
        {/* logo */}
    <div className='h-full ] object-contain mr-auto md:mr-0'>
        <Link to="/">
        <img src="/logo.jfif "
        className='w-full h-full object-contain hover:scale-105 cursor-pointer'
        />
        </Link>
    </div>
    <div  className=' gap-7 mx-5 md:flex hidden'>

        {/* desktop menu*/}
        {
            menu.map((item,index)=>{
               return (<Link to={item.path}>
                <h1
  onClick={() => setSelectedMenu(item.name)}
  className={`
    cursor-pointer
    text-[15px] px-2 py-1 duration-200
    border-b-2
    ${selectedMenu === item.name
      ? 'text-green-400 border-green-400'
      : 'text-white border-transparent hover:text-green-400 hover:border-green-400'}
  `}
>
  {item.name}
</h1>
               </Link>) 

            })
        }
    </div>
    {user?<Link to={`/profile/${user.user.id}`}>
    <MdAccountCircle className='text-2xl text-white'/>    
    </Link>:<div className='flex gap-3'>
        <Link to="/login">
        <button className="cursor-pointer bg-gradient-to-r from-green-500 to-lime-400 text-black font-semibold px-4 py-1 rounded-full shadow-md hover:scale-105 transition-all duration-300 text-[14px] md:text-[16px]">
  Login
</button>
        </Link>
        <Link to="/signup">
        <button className="cursor-pointer border-2 border-white bg-black text-white to-lime-400 font-semibold px-4 py-1 rounded-full shadow-md  transition-all duration-300 text-[14px] md:text-[16px]">
  Signup
</button>
        </Link>
        
    </div>}
    </div>
    </div>
    
    </>
  )
}

export default Navbar
