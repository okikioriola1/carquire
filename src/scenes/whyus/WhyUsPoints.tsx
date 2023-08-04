import React from 'react'

import './whyus.css'

import { BsCheck2Square } from 'react-icons/bs'


interface WhyUsPointersProps{
    title: string;
    description: string;
}

const WhyUsPoints: React.FC<WhyUsPointersProps> = ({title, description}) => {
  return (
    <div className='whyuspoints flex gap-6 py-3 my-2'>
        <div className='whyus-icon-wrapper'>
            <div className='whyus-icon'>
                <BsCheck2Square size={30}/>
            </div>
        </div>
        <div className='whyus-points-content'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

    </div>
  )
}

export default WhyUsPoints