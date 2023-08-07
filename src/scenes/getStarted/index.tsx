import * as React from "react";
import "./getstarted.css";
import GetStartedImage from "../../assets/pngs/white-car.png";
import { useForm } from "react-hook-form";
import useMediaQuery from "../../hooks/useMediaQuery";
import WhyUsPoints from "../whyus/WhyUsPoints";
import { Link } from "react-router-dom";

interface WhyUsPointsProps {
	id: number;
	title: string;
	description: string;
}

const WhyUsPointers: Array<WhyUsPointsProps> = [
	{
		id: 1,
		title: "Earn while you rest.",
		description:
			"While you're away on a trip or tired of driving, your car can make you an extra income.",
	},
	{
		id: 2,
		title: "Security.",
		description:
			"Our customers are elite business people, plus they go through a thorough KYC process that guarantees the safety of your car.",
	},
	{
		id: 3,
		title: "Weekly payouts",
		description:
			"You'll receive your earnings at the end of each week — no need to wait around for payday.",
	},
];

const GetStarted = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	const inputStyles = `mb-5 w-3/4 flex justify-center items-center m-auto border border-2 border-gray-300 rounded-lg px-5 py-3 placeholder-grey`;
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();
	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};
	return (
		<section id="getstarted" className="getstarted mt-12 bg-[#F5F5F5]">
			<div className="getstarted-wrapper basis-1/6 md:flex md:flex-row justify-center pt-5 pb-32">
				<div className="get-started-content flex flex-col justify-center">
					<div className="get-started-text py-10 md:py-8">
						<h2>Earn money with RoRo</h2>
						<p>
							What is your vehicle doing at home? Earn an extra
							income on your car instead of parking it.
						</p>
					</div>

					{WhyUsPointers.map((points: WhyUsPointsProps) => (
						<WhyUsPoints
							key={points?.id}
							title={points?.title}
							description={points?.description}
						/>
					))}
          
					<div className="py-5"></div>

					<Link to="/hire" className="home-btn">
						Get started now
					</Link>
				</div>

				<div className="get-started-form-wrapper ">
					{isAboveMediumScreens && (
						<div className="get-started-image">
							<img
								src={GetStartedImage}
								className="w-[400px]"
								alt="get-started"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default GetStarted;
