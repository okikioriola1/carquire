import * as React from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import WhyUsCar from "../../assets/pngs/blue-car.jpg";
import "./whyus.css";
import WhyUsPoints from "./WhyUsPoints";

interface WhyUsPointsProps {
	id: number;
	title: string;
	description: string;
}

const WhyUsPointers: Array<WhyUsPointsProps> = [
	{
		id: 1,
		title: "24/7 access",
		description: "Drive yourself whenever, and wherever.",
	},
	{
	    id:2,
	    title:'Affordable.',
	    description:'Only pay for the times you drive.'
	},
	// {
	//     id:2,
	//     title:'Efficient Cars',
	//     description:'All the cars have been tested and maintained properly so you don not have to worry about maintenance cost'
	// },
	{
		id: 3,
		title: "Nationwide availability",
		description:
			"If business takes you to sokoto, best believe we're in your shokoto.",
	},
	// {
	// 	id: 3,
	// 	title: "24 hour car services",
	// 	description:
	// 		"Book for your car at anytime, anyday and you will get to pick it up",
	// },
	{
	    id:4,
	    title:'24/7 Technical Support',
	    description:'Have a question? Contact central support anytime when you have a problem.'
	},
];

const WhyUs = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	return (
		<section id="whychooseus" className="py-14 whyus">
			<div className="whyus-wrapper flex w-5/6 m-auto gap-8">
				{isAboveMediumScreens && (
					<div className="flex basis-3/5 justify-center md:justify-items-end">
						<img src={WhyUsCar} className="w-4/5" alt="home-img" />
					</div>
				)}

				<div className="whyus-content flex flex-col justify-center">
					<div className="whyus-header my-6">
						<h3>Why choose us.</h3>
						{/* <h2>We offer the best experience with our deals</h2> */}
					</div>
					{WhyUsPointers.map((points: WhyUsPointsProps) => (
						<WhyUsPoints
							key={points?.id}
							title={points?.title}
							description={points?.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
