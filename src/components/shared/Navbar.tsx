"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/images/logo.svg";
import { HiMenu } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { BiLogIn } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import useMediaQuery from "../hooks/useMediaQuery";
import { BiSolidDollarCircle } from "react-icons/bi";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaClipboardList, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
	const [open, setOpen] = useState<Boolean>(false);
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	return (
		<>
			<div className="bg-white fixed z-40 w-full shadow">
				<div className="flex justify-between items-center w-[95%] mx-auto py-3 ">
					<div className="flex items-center gap-4">
						<Image src={logo} alt="" />
						<div className="cursor-pointer md:flex gap-5 text-primary hidden">
							<p className="hover:text-orange duration-300">Cources</p>
							<p className="hover:text-orange duration-300">Pricing</p>
							<p className="hover:text-orange duration-300">
								Mock Interviews
							</p>
							<p className="hover:text-orange duration-300">
								Interview Bootcamp
							</p>
							<p className="hover:text-orange duration-300">Guides</p>
						</div>
					</div>
					<div className="cursor-pointer hidden md:flex gap-5">
						<p className="text-primary hover:text-orange duration-300">
							Contact Us
						</p>
						<p className="text-primary flex gap-1 hover:text-orange duration-300">
							<BiLogIn className="w-6 h-6" />
							Login in
						</p>
						<p className="text-primary flex gap-1 hover:text-orange duration-300">
							<LuUserPlus className="w-6 h-6" />
							Sign Up
						</p>
					</div>
					<div onClick={() => setOpen(true)} className="md:hidden">
						<HiMenu className="h-8 w-8 text-primary" />
					</div>
				</div>
			</div>
			{/* <==<<=== Mobile Menu ===>>==> */}
			{!isAboveMediumScreens && (
				<div
					className={`${
						open
							? "w-full transition-all duration-500"
							: "w-0 transition-all duration-500"
					} fixed right-0 bottom-0 z-40 h-full bg-white shadow-2xl`}
				>
					{/* <==<<=== Close Icon ===>>==> */}
					<div className="flex justify-between px-4 pb-12 pt-7">
						<Image src={logo} alt="" />
						<button onClick={() => setOpen(!open)}>
							<AiOutlineClose className="h-10 w-10 text-primary p-2 rounded-full" />
						</button>
					</div>
					{/* <==<<=== Menu Items ===>>==> */}
					<div className="cursor-pointer flex flex-col text-primary gap-5">
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<MdCollectionsBookmark className="w-6 h-6" />
							Cources
						</p>
						<hr />
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<BiSolidDollarCircle className="w-6 h-6" />
							Pricing
						</p>
						<hr />
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<ImUsers className="w-6 h-6" />
							Mock Interviews
						</p>
						<hr />
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<PiUsersThreeFill className="w-6 h-6" />
							Interview Bootcamp
						</p>
						<hr />
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<FaClipboardList className="w-6 h-6" />
							Guides
						</p>
						<hr />
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<FaPhoneAlt className="w-6 h-6" />
							Contact Us
						</p>
						<hr />
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<BiLogIn className="w-6 h-6" />
							Login
						</p>
						<hr />
						<p className="flex gap-2 hover:text-orange duration-300 px-4">
							<LuUserPlus className="w-6 h-6" />
							Sign Up
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
