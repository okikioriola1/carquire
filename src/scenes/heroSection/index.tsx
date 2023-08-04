import useMediaQuery from '../../hooks/useMediaQuery';
import * as React from 'react'
import Car1 from '../../assets/pngs/car-img1.png'
import './hero.css'

const Hero = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="py-14 bg-[#F5F5F5]">

    <div className='home-wrapper w-4/5 m-auto flex gap-9'>
        <div className='content md:basis-2/5'>
            <div className='text'>
                <h4>Find, Book and Own any Car of your choice in <span className='blue-color'>Easy</span> steps</h4>
                <p> Get a car whenever you need it and for as long as you need it</p>
            </div>

        </div>
        {isAboveMediumScreens && (

<div className='flex basis-3/5 justify-center md:justify-items-end md:ml-20'>
    <img src={Car1} alt="home-img"/>

</div>
)}



    </div>
    </section>
  )
}

export default Hero