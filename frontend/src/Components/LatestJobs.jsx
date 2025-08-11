import React from 'react'
import JobCard from './JobCard'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LatestJobs = () => {
 const jobs=[
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
    location: "On site - Bangalore",
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
    location: "On site - Delhi",
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
  }
    
  ]
  
  return (
    <div className='p-4 md:px-20 px-8 '>
      <h1 className='text-center text-3xl font-bold'>Latest jobs</h1>
      <div className='flex space-x-5 overflow-scroll mt-5'>
          {
            jobs.slice(0,4).map((job,index)=>{
                return(<JobCard {...job}/>
                )
            })
        }
        <div className='min-w-[100px] flex flex-col items-center justify-center'>
          <h1 className='text-[20px]'>More jobs</h1>
          <Link to="/jobs">
           <FaArrowCircleRight className='text-3xl'/>
          </Link>
        

        </div>

        
    </div>
    </div>
  )
}

export default LatestJobs
