import React from "react";
import { SlGraph } from "react-icons/sl";
import { IoMdPhotos } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { PiBookOpenTextFill } from "react-icons/pi";
import { AiOutlineClockCircle } from "react-icons/ai";

const Banner = () => {
	return (
		<section className="bg-bannerBg py-14">
			<div className="w-full md:w-[60%] mx-auto px-4 md:px-0">
				<div className="grid md:grid-cols-3">
					<div className="col-span-2 text-white">
						<h1 className="text-[30px] font-bold">
							Grokking Dynamic Programming Patterns for Coding Interviews
						</h1>
						<h3 className="text-[18px] leading-[27px] mt-3">
							Master Dynamic Programming by learning coding patterns. Act
							smartly, and follow the Dynamic Programming patterns.
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center my-5">
							<button className="flex justify-center items-center gap-1 border border-white px-1 py-2 rounded-md bg-[#ffffff0d] cursor-text">
								<SlGraph className="w-6 h-6" />
								<span className="text-sm">Level: Advanced</span>
							</button>
							<button className="flex justify-center items-center gap-1 border border-white px-1 py-2 rounded-md bg-[#ffffff0d] cursor-text">
								<AiOutlineClockCircle className="w-6 h-6" />
								<span className="text-sm">Study Time: 61h</span>
							</button>
							<button className="flex justify-center items-center gap-1 border border-white px-1 py-2 rounded-md bg-[#ffffff0d] cursor-text">
								<PiBookOpenTextFill className="w-6 h-6" />
								<span className="text-sm">Lessons: 73</span>
							</button>
							<button className="flex justify-center items-center gap-1 border border-white px-1 py-2 rounded-md bg-[#ffffff0d] cursor-text">
								<IoMdPhotos className="w-6 h-6" />
								<span className="text-sm">Playgrounds: 142</span>
							</button>
						</div>
                  <div className="flex justify-start items-center gap-1">
                     <GiGraduateCap className="w-6 h-6" />
                     <span className="text-sm">39,106 (Students)</span>
                  </div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
