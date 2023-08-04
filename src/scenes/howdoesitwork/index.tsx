import React from 'react'
import './how.css'
import {BsFillCarFrontFill, BsCalendarDayFill, BsCheck2All} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import HowCard from './HowCard';



interface HowItWorksCardProps{
    icon: JSX.Element;
    title: string;
    description: string;
    id: Number;
}


const HowItWorksCard: Array<HowItWorksCardProps>=[
    {
        icon:<BsFillCarFrontFill/>,
        title:'Pick a type of car',
        description:'Choose your preferred car from a robust variety of cars ',
        id:1
    },
    {
        icon:<MdLocationOn/>,
        title: 'Choose a location ',
        description:'Pick a convenient location where you want to pick up your car.',
        id:2,
    },
    {
        icon:<BsCalendarDayFill/>,
        title:'Pick a date and duration',
        description:'Pick the day you would want to pick up your car and how long you will use the car for',
        id:3,
    },
    {
        icon:<BsCheck2All/>,
        title:'Book your car',
        description:'You car will then be booked for you to pick it up',
        id:4,
    }
]

const HowItWorks = () => {
  return (
    <section id="howdoesitwork?" className='howitworks'>
        <div className='how-container'>
            <div className='how-header'>
                <h1>How does it work?</h1>
                <h4>Find and Own your own car in simple steps</h4>
            </div>
            <div className='how-body md:flex items-center justify-between gap-8 mt-5'>
                {HowItWorksCard.map((item:HowItWorksCardProps)=>(
                    <HowCard key={item?.id} icon={item?.icon} title={item?.title} description={item?.description} />
                ))}

            </div>



        </div>


    </section>
  )
}

export default HowItWorks