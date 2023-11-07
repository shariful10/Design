"use client";
import React, { useState } from "react";
import logo from "@/images/logo.svg";
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";

const Navbar = () => {
   const [first, setfirst] = useState<Boolean>(false);

	return (
		<div className="w-[95%] mx-auto py-3 bg-white">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-4">
					<Image src={logo} alt="" />
					<div className="cursor-pointer flex gap-5 text-primary">
						<p className="hover:text-[#ff6700] duration-300">Cources</p>
						<p className="hover:text-[#ff6700] duration-300">Pricing</p>
						<p className="hover:text-[#ff6700] duration-300">Mock Interviews</p>
						<p className="hover:text-[#ff6700] duration-300">Interview Bootcamp</p>
						<p className="hover:text-[#ff6700] duration-300">Guides</p>
					</div>
				</div>
				<div className="cursor-pointer flex gap-5">
					<p className="text-primary hover:text-[#ff6700] duration-300">Contact Us</p>
					<p className="text-primary flex gap-1 hover:text-[#ff6700] duration-300">
						<BiLogIn className="w-6 h-6" />
						Login in
					</p>
					<p className="text-primary flex gap-1 hover:text-[#ff6700] duration-300">
						<LuUserPlus className="w-6 h-6" />
						Sign Up
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
