import useMediaQuery from "../../hooks/useMediaQuery";
import * as React from "react";
import Car1 from "../../assets/pngs/car-img1.png";
import "./hero.css";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	const [selectedPage, setSelectedPage] = React.useState("");

	return (
		<section id="home" className="py-14 bg-[#F5F5F5]">
			<div className="home-wrapper w-4/5 m-auto flex gap-9">
				{/* <div className='content md:basis-2/5'> */}
				<div className="content">
					<div className="text">
						{/* <h4>Find, Book and Own any Car of your choice in <span className='blue-color'>Easy</span> steps</h4> */}
						<h1>
							On-demand personal car you need on a business trip.
						</h1>
						{/* <h1>A car you can call yours when in a new city for business.</h1> */}
						{/* <h1>Do business like a boss.</h1> */}
						{/* <h1>Where no ride-hailing, there's XiDrive.</h1> */}
						<p>
							Going on a business trip in a city with no
							ride-hailing, and not sure how you'd move around
							without your own car? Get a personal car in 2
							minutes.
						</p>
						{/* <p> Get a car whenever you need it and for as long as you need it</p> */}
					</div>
					<div className="flex gap-10 mt-8">
						<Link to="/request" className="home-btn">
							Make Request
						</Link>
						{/* <Link to="/lease" className="home-btn">
							Drop A Car
						</Link> */}

						<AnchorLink
							href={`#getstarted`}
							onClick={() => setSelectedPage("getstarted")}
							className={`transition duration-500 earn-btn btn-red`}
						>
							Earn with RoRo
						</AnchorLink>
					</div>
				</div>
				{isAboveMediumScreens && (
					<div className="flex basis-3/5 justify-center md:justify-items-end md:ml-20">
						<img src={Car1} alt="home-img" />
					</div>
				)}
			</div>
		</section>
	);
};

export default Hero;
