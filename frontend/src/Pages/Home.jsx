import React from 'react'
import Services from '../Components/Services'
import LatestJobs from '../Components/LatestJobs'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='mt-[70px] md:mt-[100px] bg-gradient-to-r from-[#f0f2f5] to-[#e0e7ff] w-full h-full  md:h-[500px] flex flex-col md:flex-row p-4'>
      <div className='md:w-1/2 w-full p-2 md:p-10 flex flex-col gap-5 '>
       
         <h1 className='md:text-4xl text-3xl font-bold'>
        Empowering the Next Generation of Talent
      </h1>
      <h2 className='text-2xl text-[20px]'>
        Learn. Grow. Get Hired.
      </h2>
      <div className='gap-3 flex-wrap flex'> 
        <Link to="/educational-content">
                <button className='bg-pink-500 text-white rounded-3xl px-4 hover:bg-pink-600 cursor-pointer text-[15px] md:text-[20px]  py-1'>Get Started</button>
        </Link>
<Link to="/jobs">
       <button className='bg-green-500 text-white rounded-3xl px-4 hover:bg-green-600 text-[15px] md:text-2xl py-1 cursor-pointer'>Explore Opportunities</button>

</Link>
      </div>
      <h4>A Platform that will help and Guide upcoming Talents through Educational Content , Guidance and Job Opportunities.</h4>
       
      </div>
      <div className='md:w-1/2 w-full '> 
        <img src="/hero.png" className='w-full object-contain rounded h-full'/>
      </div>
      

    </div>
    <LatestJobs/>
    <Services/>
    </>
  )
}

export default Home
