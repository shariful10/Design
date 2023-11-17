import {
	FaTwitter,
	FaYoutube,
	FaLinkedin,
	FaFacebookSquare,
} from "react-icons/fa";
import Image from "next/image";
import footerImg from "../../images/logo-foooter.svg";

const Footer = () => {
	const yaer = new Date().getFullYear();

	return (
		<footer className="bg-bannerBg py-10">
			<div className="md:w-[60%] mx-auto px-4 md:px-0">
				<Image src={footerImg} alt="" />
				<p className="text-sm text-[#e0e0e0] font-light mt-4">
					One-Stop Portal For Tech Interviews.
				</p>
				<div className="grid md:grid-cols-4 justify-between text-white mt-10">
					<div>
						<h4 className="text-[14px] font-semibold">ABOUT US</h4>
						<div>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Our Team
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Careers
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Contact Us
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Become Affiliate
							</p>
						</div>
					</div>
					<div className="mt-10 md:mt-0">
						<h4 className="text-[14px] font-semibold">SOCIAL</h4>
						<div>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline flex items-center gap-2">
								Facebook
								<FaFacebookSquare />
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline flex items-center gap-2">
								LinkedIn
								<FaLinkedin />
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline flex items-center gap-2">
								Twitter
								<FaTwitter />
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline flex items-center gap-2">
								Youtube
								<FaYoutube />
							</p>
						</div>
					</div>
					<div className="mt-10 md:mt-0">
						<h4 className="text-[14px] font-semibold">LEGAL</h4>
						<div>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Privacy Policy
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Cookie Policy
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Terms of Service
							</p>
						</div>
					</div>
					<div className="mt-10 md:mt-0">
						<h4 className="text-[14px] font-semibold">RESOURCES</h4>
						<div>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Blog
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Knowledge Base
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Blind 75
							</p>
							<p className="text-[14px] font-light my-2 cursor-pointer hover:underline">
								Company Guides
							</p>
						</div>
					</div>
				</div>
				<p className="text-sm text-white font-light text-center mt-5">
					Copyright © {yaer} Designgurus, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
