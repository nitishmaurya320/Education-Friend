import React from 'react'

const Card = ({name,description}) => {

  return (
    <div className='w-[420px] h-full bg-white p-5 gap-3 md:p-10 rounded flex flex-col shadow-sm hover:scale-102 duration-100'>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='text-[13px]'>{description}</p>
        <div className=' justify-center flex mt-auto'>
            <button className='bg-green-500  hover:bg-green-600 cursor-pointer px-2 py-2 rounded'>Explore Now</button>  
        </div>
        
    </div>
  )
}

export default Card
