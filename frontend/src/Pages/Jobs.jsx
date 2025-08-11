import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import JobCard from '../Components/JobCard';
import { useSearchParams } from 'react-router-dom'
const Jobs = () => {
const [isScrolled,setIsScrolled]=useState(false)
const [searchParams,setSearchParams]=useSearchParams();
console.log(searchParams)
  useEffect(()=>{
          const handleScroll=()=>{
              setIsScrolled(window.scrollY>0);
          };
          window.addEventListener("scroll",handleScroll)
          return () => window.removeEventListener("scroll", handleScroll);
      },[])

  // useEffect(()=>{
  //   if(!searchParams.get("location")||!searchParams.get("type")){
  //     setSearchParams({
  //       location:"remote",
  //       type:"full-time"
  //     })
  //   }
  // },[])

      
      
  const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹5 - ₹8 LPA",
    skills: ["React", "JavaScript", "CSS", "Tailwind"],
    link: "https://example.com/job/frontend-developer"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeCraft",
    location: "On-site - Bangalore",
    type: "Internship",
    experience: "Fresher",
    salary: "₹15,000/month",
    skills: ["Node.js", "MongoDB", "Express", "API"],
    link: "https://example.com/job/backend-developer"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Innovatech",
    location: "Remote",
    type: "Part-time",
    experience: "2-3 years",
    salary: "₹10 - ₹12 LPA",
    skills: ["React", "Node.js", "Redux", "MongoDB"],
    link: "https://example.com/job/fullstack-developer"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataWiz",
    location: "On-site - Delhi",
    type: "Full-time",
    experience: "1 year",
    salary: "₹6 LPA",
    skills: ["Excel", "SQL", "PowerBI", "Python"],
    link: "https://example.com/job/data-analyst"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "Remote",
    type: "Freelance",
    experience: "3+ years",
    salary: "₹1000/hr",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    link: "https://example.com/job/ui-ux-designer"
  },
   {
    id: 6,
    title: "Backend Developer",
    company: "CodeVerse",
    location: "On-site",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹7 - ₹12 LPA",
    skills: ["Node.js", "Express", "MongoDB", "Docker"],
    link: "https://example.com/job/backend-developer"
  },
  {
    id: 7,
    title: "UI/UX Intern",
    company: "DesignNest",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    salary: "₹10K - ₹15K/month",
    skills: ["Figma", "Adobe XD", "User Research"],
    link: "https://example.com/job/uiux-intern"
  },
  {
    id: 8,
    title: "MERN Stack Developer",
    company: "InnovateLabs",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹6 - ₹10 LPA",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://example.com/job/mern-stack"
  },
  {
    id: 9,
    title: "Data Analyst",
    company: "DataForge",
    location: "On-site",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹5 - ₹7 LPA",
    skills: ["Excel", "SQL", "Tableau", "Python"],
    link: "https://example.com/job/data-analyst"
  },
  {
    id: 10,
    title: "DevOps Intern",
    company: "CloudSync",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    salary: "₹12K/month",
    skills: ["Linux", "Docker", "CI/CD", "AWS Basics"],
    link: "https://example.com/job/devops-intern"
  },
  {
    id: 11,
    title: "Mobile App Developer",
    company: "AppWizards",
    location: "On-site",
    type: "Full-time",
    experience: "2-3 years",
    salary: "₹6 - ₹9 LPA",
    skills: ["Flutter", "Firebase", "REST API"],
    link: "https://example.com/job/mobile-developer"
  },
  {
    id: 12,
    title: "Content Writer Intern",
    company: "WriteSpark",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    salary: "₹8K - ₹12K/month",
    skills: ["SEO", "Blog Writing", "Content Strategy"],
    link: "https://example.com/job/content-writer"
  },
  {
    id: 13,
    title: "Machine Learning Engineer",
    company: "AI Vision",
    location: "Remote",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹8 - ₹12 LPA",
    skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    link: "https://example.com/job/ml-engineer"
  },
  {
    id: 14,
    title: "SEO Analyst",
    company: "MarketGenius",
    location: "On-site",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹4 - ₹6 LPA",
    skills: ["Google Analytics", "SEO", "Keyword Research"],
    link: "https://example.com/job/seo-analyst"
  },
  {
    id: 15,
    title: "Graphic Design Intern",
    company: "PixelTree",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    salary: "₹10K/month",
    skills: ["Photoshop", "Illustrator", "Canva"],
    link: "https://example.com/job/graphic-design"
  }
];

const handleJobLocationChange=(e)=>{
    const location=e.target.value;
    searchParams.set("location",location)
    setSearchParams(searchParams)
}
const handleJobTypeChange=(e)=>{
    const type=e.target.value;
    searchParams.set("type",type)
    setSearchParams(searchParams)
}



  return (
    <div className='w-full md:mt-[100px] bg-white '>
      <div className={`w-full bg-white md:h-[100px] flex flex-col gap-5 top-[70px] md:top-[100px] p-7 md:flex-row justify-evenly fixed ${isScrolled?"shadow-md":""} z-25`}>
        
        {/* Seachbar */}
        <div className="w-full max-w-md mr-auto md:mx-auto p-2">
      <div className=" relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-400 p-2 rounded-full cursor-pointer hover:bg-green-600 transition">
          <IoSearch className="text-white text-lg" />
        </div>
      </div>
    </div>
        <div className='flex gap-4'>
        <select onChange={handleJobLocationChange} id="sort" value={searchParams.get("location")||"remote"} className='outline-none'>
          <option value="remote">Remote</option>
          <option value="on-site">On site</option>
        </select>
        <select onChange={handleJobTypeChange} id="sort" value={searchParams.get("type")||"full-time"}  className='outline-none'>
          <option value="full-time">Full Time</option>
          <option value="internship">internship</option>
        </select>
      </div>
       
      </div>
      <div className='  py-10 px-5  md:px-20 mt-[200px] bg-gray-200'>
        <div className='flex flex-col gap-5 f md:w-1/2 w-full' >
          {
jobData
      .filter((job) => {
      const locationParam = (searchParams.get("location") || "").toLowerCase();
      const typeParam = (searchParams.get("type") || "").toLowerCase();
      return (
          job.location.toLowerCase().includes(locationParam) &&
          job.type.toLowerCase().includes(typeParam)
        );
      })
      .map((job) => (
        <JobCard key={job.id} shadow={"shadow-md"} {...job} />
))
}
        </div>
      </div>
      
    </div>
  )
}

export default Jobs

