import React from "react";
import logo from "@/images/logo.svg";
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { LuUserPlus } from "react-icons/lu";

const Navbar = () => {
	return (
		<div>
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-4">
					<Image src={logo} alt="" />
					<div className="cursor-pointer flex gap-2">
						<p className="hover:text-[#ff6700]">Cources</p>
						<p className="hover:text-[#ff6700]">Pricing</p>
						<p className="hover:text-[#ff6700]">Mock Interviews</p>
						<p className="hover:text-[#ff6700]">Interview Bootcamp</p>
						<p className="hover:text-[#ff6700]">Guides</p>
					</div>
				</div>
				<div className="cursor-pointer flex gap-2">
					<p className="hover:text-[#ff6700]">Contact Us</p>
					<p className="flex gap-1 hover:text-[#ff6700]">
						<BiLogIn className="w-6 h-6" />
						Login in
					</p>
					<p className="flex gap-1 hover:text-[#ff6700]">
						<LuUserPlus className="w-6 h-6" />
						Sign Up
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
