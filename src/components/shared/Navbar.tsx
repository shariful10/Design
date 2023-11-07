"use client";
import React, { useState } from "react";
import logo from "@/images/logo.svg";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
	const [open, setOpen] = useState<Boolean>(false);
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	return (
		<>
			<div className="w-[95%] mx-auto py-3 bg-white">
				<div className="flex justify-between items-center">
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
					<div className="cursor-pointer flex flex-col text-black gap-5">
						<p className="hover:text-orange duration-300 px-4">
							Cources
						</p>
                  <hr />
						<p className="hover:text-orange duration-300 px-4">
							Pricing
						</p>
                  <hr />
						<p className="hover:text-orange duration-300 px-4">
							Mock Interviews
						</p>
                  <hr />
						<p className="hover:text-orange duration-300 px-4">
							Interview Bootcamp
						</p>
                  <hr />
						<p className="hover:text-orange duration-300 px-4">
							Guides
						</p>
                  <hr />
						<p className="hover:text-orange duration-300 px-4">
                     Contact Us
						</p>
                  <hr />
						<p className="hover:text-orange duration-300 px-4">
                     Login
						</p>
                  <hr />
						<p className="hover:text-orange duration-300 px-4">
							Sign Up
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
