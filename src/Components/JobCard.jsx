import React from 'react'

const JobCard = (props) => {
    
  return (
   <div className={`md:min-w-[400px] min-w-full cursor-pointer p-5 rounded-2xl ${props.shadow} border border-gray-200 bg-white  transition-shadow duration-300 flex flex-col gap-3`}>

  <h3 className="text-xl font-semibold text-blue-500">{props.title}</h3>
  
  <p>
    <span className="font-bold text-gray-700">Company: </span>
    <span className="text-gray-600">{props.company}</span>
  </p>
  
  <p>
    <span className="font-bold text-gray-700">Location: </span>
    <span className="text-gray-600">{props.location}</span>
  </p>
  <p>
    <span className="font-bold text-gray-700">Experience: </span>
    <span className="text-gray-600">{props.experience}</span>
  </p>
  <p>
    <span className="font-bold text-gray-700">Type: </span>
    <span className="text-gray-600">{props.type}</span>
  </p>
  <p>
    <span className="font-bold text-gray-700">Salary: </span>
    <span className="text-gray-600">{props.salary}</span>
  </p>
  <p>
    <span className="font-bold text-gray-700">Skills: </span>
      <span className="text-gray-600">
        {Array.isArray(props.skills) ? props.skills.join(", ") : props.skills}
      </span>
  </p>
  <p>
    <span className="font-bold text-gray-700">Apply Link: </span>
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:text-green-800 underline"
    >
      Apply Here
    </a>
  </p>
</div>

  )
}

export default JobCard
