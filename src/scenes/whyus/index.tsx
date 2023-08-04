import * as React from 'react'

import useMediaQuery from '../../hooks/useMediaQuery';

import WhyUsCar from '../../assets/pngs/blue-car.jpg'
import './whyus.css'
import WhyUsPoints from './WhyUsPoints';

interface WhyUsPointsProps {
    id?: Number;
    title?: string;
    description?: string;
}


const WhyUsPointers: Array<WhyUsPointsProps> = [
    {
        id:1,
        title:'Best Price guaranted',
        description:'Find a lower price elsewhere? We will refund you 100% of the difference'
    },
    {
        id:2,
        title:'Efficient Cars',
        description:'All the cars have been tested and maintained properly so you don not have to worry about maintenance cost'
    },
    {
        id:3,
        title:'24 hour car services',
        description:'Book for your car at anytime, anyday and you will get to pick it up'
    },
    {
        id:4,
        title:'24/7 Technical Support',
        description:'Have a question? Contact central support anytime when you have a problem'
    },
    
]



const WhyUs: React.FC<Props> = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="whychooseus" className='py-14 whyus'>
        <div className='whyus-wrapper flex w-5/6 m-auto gap-8'>
        {isAboveMediumScreens && (

        <div className='flex basis-4/5 justify-center md:justify-items-end'>
    <img src={WhyUsCar} className="w-4/5" alt="home-img"/>

        </div>
)}

            <div className='whyus-content'>
                <div className='whyus-header my-6'>
                    <h4>Why choose us</h4>
                    <h2>We offer the best experience with our deals</h2>
                </div>
                {WhyUsPointers.map((points: WhyUsPointsProps)=>(
                    <WhyUsPoints key={points?.id} title={points?.title} description={points?.description} />
                ))}
            </div>


</div>

    </section>
  )
}

export default WhyUs