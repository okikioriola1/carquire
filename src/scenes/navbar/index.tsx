import * as React from "react";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { SelectedPage } from "@/shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
// import ActionButton from "@/shared/ActionButton"

type Props = {
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
	const flexBetween = "flex items-center justify-between";

	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	const navbarBackground = "bg-primary-100 drop-shadow";

	return (
		<nav>
			<div
				className={`${navbarBackground} ${flexBetween} z-30 w-full py-6`}
			>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						<Link to="/">
							{" "}
							<h2>RoRo</h2>
						</Link>

						{/* {isAboveMediumScreens ? (
							<div className={`${flexBetween} w-full`}>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<NavLink
										page="Home"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<NavLink
										page="How Does It Work?"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<NavLink
										page="Why Choose Us"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>

									<NavLink
										page="Get Started"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								<div className={`${flexBetween} gap-8`}>
									<p>Sign In</p>
								</div>
							</div>
						) : (
							<button
								className="rounded-full bg-secondary-500 p-2"
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<Bars3BottomRightIcon className="h-6 w-6 text-black" />
							</button>
						)} */}
					</div>
				</div>
			</div>

			{/* MobileMenu */}
			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-black drop-shadow-xl">
					<div className="flex justify-end p-12">
						<button
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<XMarkIcon className="h-6 w-6 text-gray-400" />
						</button>
					</div>
					<div className="ml-[33%] flex flex-col text-white gap-10 text-2xl">
						<NavLink
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<NavLink
							page="How Does It Work?"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<NavLink
							page="Why Choose Us"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>

						<NavLink
							page="Get Started"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
