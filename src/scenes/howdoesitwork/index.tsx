import * as React from "react";
import "./how.css";
import {
	BsFillCarFrontFill,
	BsCalendarDayFill,
	BsCheck2All,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import HowCard from "./HowCard";

interface HowItWorksCardProps {
	icon: JSX.Element;
	title: string;
	description: string;
	id: number;
}

const HowItWorksCard: Array<HowItWorksCardProps> = [
	{
		icon: <MdLocationOn />,
		title: "Choose your location ",
		description: "Let us know which city you're in.",
		// "Pick a convenient location where you want to pick up your car.",
		id: 2,
	},
	{
		icon: <BsCalendarDayFill />,
		title: "Pick a duration",
		description: "How long do you want need the car for?",
		// "Pick the day you would want to pick up your car and how long you will use the car for",
		id: 3,
	},
	{
		icon: <BsCheck2All />,
		title: "Book your car",
		description: "You car will then be booked for you to pick it up",
		id: 4,
	},
	{
		icon: <BsFillCarFrontFill />,
		title: "Get matched",
		description:
			"Choose your preferred car and get it at your doorstep.",
		// description: "Choose your preferred car from a robust variety of cars ",
		id: 1,
	},
];

const HowItWorks = () => {
	return (
		<section id="howdoesitwork?" className="howitworks">
			<div className="how-container">
				<div className="how-header">
					<h3>How does it work?</h3>
					<h4>Find and Own your own car in simple steps</h4>
				</div>
				<div className="how-body md:flex items-center justify-between gap-8 mt-5">
					{HowItWorksCard.map((item: HowItWorksCardProps) => (
						<HowCard
							key={item?.id}
							icon={item?.icon}
							title={item?.title}
							description={item?.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
