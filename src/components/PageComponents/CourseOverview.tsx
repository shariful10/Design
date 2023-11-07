"use client"
import Image from "next/image";
import {useState, useEffect} from "react"
import {PiCertificateBold} from "react-icons/pi"
import image from "../../images/sidebar.webp";

const CourseOverview = () => {
   const [scrolling, setScrolling] = useState<Boolean>(false);

   useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className="w-full md:w-[60%] mx-auto px-4 md:px-0 py-10 relative">
			<div className="grid md:grid-cols-3 gap-6">
				<div className="md:col-span-2">
					<h1 className="text-h2 leading-[39px] font-bold">
						Course Overview
					</h1>
					<p className="text-textSize leading-6 my-4">
						The fact is, Dynamic Programming (DP) problems can be some of
						the most intimidating on a coding interview. Even when
						it&rsquo;s actually clear if a problem can be solved using DP
						(which it rarely is), it can be pretty challenging to even
						know where to start on the solution. Unless, that is,
						you&rsquo;re trained on the approach to solving DP problems.
					</p>
					<p className="text-textSize leading-6">
						This course was made from scratch with just that goal in mind.
						It&rsquo;ll equip you with a set of easy-to-understand
						techniques to handle any DP problem. Rather than just having
						you try to memorize solutions, you&rsquo;ll be walked through
						five underlying DP patterns that can then be applied to solve
						35+ DP problems. In each pattern, we&rsquo;ll start with a
						recursive brute-force solution -- this is actually the best
						way to start solving a DP problem! Once we have a recursive
						solution, we&rsquo;ll then apply the advanced DP methods of
						Memoization and Tabulation.
					</p>
					<p className="text-textSize leading-6">
						The practice problems in this course were carefully chosen,
						covering the most frequently asked DP questions in coding
						interviews.
					</p>
				</div>
				<div className={`md:col-span-1 shadow rounded-b-lg bg-white rounded-t-lg md:fixed md:max-w-[400px]  md:right-[320px] ${scrolling ? "md:top-[61px]" : "md:top-[170px]"}`}>
					<Image src={image} className="rounded-t-lg" alt="image" />
					<div className="px-3 pb-3 pt-2">
						<div className="border rounded-lg p-3">
							<p className="text-center text-[13px]">
								Get instant access to all current and upcoming courses
								through subscription.
							</p>
							<div className="flex justify-center items-center gap-1">
								<h1 className="text-[40px] font-bold">$13</h1>
								<div className="text-sm flex flex-col justify-center">
									<p>.99</p>
									<p>/mo</p>
								</div>
							</div>
							<button className="w-full bg-primary py-1.5 rounded-lg text-white font-semibold">
								All Courses Access
							</button>
							<p className="text-[13px] text-center mt-2">
								Discounted Prices for{" "}
								<span className="font-medium">India</span> 🇮🇳
							</p>
						</div>
					</div>
					<h1 className="text-center">OR</h1>
					<div className="px-3 pb-3 pt-2">
						<div className="border rounded-lg p-3">
							<p className="text-center text-[13px]">
								Get Lifetime access to this course only.
							</p>
							<h2 className="text-center text-xl text-gray-400 font-bold line-through mt-5">
								$49
							</h2>
							<h1 className="text-[40px] font-bold text-center">
								$13.99
							</h1>
							<button className="w-full bg-primary py-1.5 rounded-lg text-white font-semibold">
								All Courses Access
							</button>
							<p className="text-[13px] text-center mt-2">
								Discounted Prices for{" "}
								<span className="font-medium">India</span> 🇮🇳
							</p>
						</div>
					</div>
					<div className="px-3 pb-5 pt-2">
						<button className="w-full bg-[#ECECEC] py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                     <PiCertificateBold className="h-6 w-6" />
							Certification on completing the course.
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseOverview;
