import React from "react";

const CourseContent = () => {
	return (
		<section className="w-full md:w-[60%] mx-auto px-4 md:px-0 pb-10">
			<div className="grid md:grid-cols-3">
				<div className="col-span-2">
					<div className="flex justify-between items-center">
						<h1 className="text-h2 leading-[39px] font-bold">
							Course Content
						</h1>
                  <div className="flex justify-end items-center text-primary text-[13px]">
                     <span>• 7 Chapters</span>
                     <span className="ml-2">• 73 Lessons</span>
                  </div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseContent;
