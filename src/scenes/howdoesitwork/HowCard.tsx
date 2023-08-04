import React from 'react'

interface CardProps{
    title?: string;
    icon?: JSX.Element;
    description?: string;
}

const HowCard: React.FC<CardProps> = ({title, icon, description}) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:w-3/5'
   
    >

        <div className='mb-4 flex justify-center'>
            <div className='how-card-icon-wrapper'>
                {icon}
            </div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>


    </div>
  )
}

export default HowCard