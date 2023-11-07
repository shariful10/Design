import React from "react";

const CourseOverview = () => {
	return (
		<section className="w-full md:w-[60%] mx-auto px-4 md:px-0 py-10">
			<div className="grid md:grid-cols-3">
				<div className="col-span-2">
					<h1 className="text-h2 leading-[39px] font-bold">
						Course Overview
					</h1>
					<p className="text-textSize leading-6 my-4">
						The fact is, Dynamic Programming (DP) problems can be some of
						the most intimidating on a coding interview. Even when it&rsquo;s
						actually clear if a problem can be solved using DP (which it
						rarely is), it can be pretty challenging to even know where to
						start on the solution. Unless, that is, you&rsquo;re trained on the
						approach to solving DP problems.
					</p>
					<p className="text-textSize leading-6">
               This course was made from scratch with just that goal in mind. It&rsquo;ll equip you with a set of easy-to-understand techniques to handle any DP problem. Rather than just having you try to memorize solutions, you&rsquo;ll be walked through five underlying DP patterns that can then be applied to solve 35+ DP problems. In each pattern, we&rsquo;ll start with a recursive brute-force solution -- this is actually the best way to start solving a DP problem! Once we have a recursive solution, we&rsquo;ll then apply the advanced DP methods of Memoization and Tabulation.
					</p>
					<p className="text-textSize leading-6">
               The practice problems in this course were carefully chosen, covering the most frequently asked DP questions in coding interviews.
					</p>
				</div>
			</div>
		</section>
	);
};

export default CourseOverview;
