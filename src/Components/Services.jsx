import React from 'react'
import Card from './Card'

const Services = () => {
    const services=[
       {
    name: "🎯 Career Development Coaching",
    description: "Personalized coaching to help individuals identify goals, build skills, and advance their careers effectively."
  },
  {
    name: "🧭 Leadership Development",
    description: "Programs and sessions designed to enhance leadership qualities, communication, and decision-making skills."
  },
  {
    name: "📄 Resume Review",
    description: "Professional feedback and improvement suggestions to make your resume stand out in the job market."
  },
  {
    name: "🤝 Team Building",
    description: "Workshops and activities that strengthen collaboration, communication, and morale within teams."
  },
  {
    name: "🏫 Educational Consulting",
    description: "Guidance for students, institutions, and educators to improve learning strategies and academic performance."
  },
  {
    name: "💻 IT Consulting",
    description: "Expert advice and solutions to improve and optimize IT infrastructure, systems, and operations."
  },
  {
    name: "🌐 Network Support",
    description: "Reliable setup, maintenance, and troubleshooting for small to medium-sized business networks."
  },
  {
    name: "📢 Advertising",
    description: "Creating and managing effective ad campaigns that boost visibility, engagement, and conversion."
  },
  {
    name: "🚀 Brand Marketing",
    description: "Building strong brand identities through strategy, storytelling, and consistent visual messaging."
  },
  {
    name: "✍️ Content Marketing",
    description: "Crafting valuable and targeted content to attract, engage, and retain your audience."
  }
    ]
  return (
    <div className='px-5 md:px-20 py-10  '>
        <h1 className='text-center text-3xl font-bold '>Services</h1>
        <div className='flex-wrap flex gap-6 items-center justify-center mt-5 '>
            {
                services.map((service,index)=>{
                    return (<Card name={service.name} description={service.description} key={index}/>   )
                })
            }
        </div>
     
    </div>
  )
}

export default Services
