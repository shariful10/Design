"use client";
import React, { useState } from "react";
import { TiDocumentText } from "react-icons/ti";
import { FaAngleDown, FaAngleUp, FaLock } from "react-icons/fa";

const CourseContent = () => {
	const [openIntro, setOpenIntro] = useState<Number>(0);

	return (
		<section className="w-full md:w-[60%] mx-auto px-4 md:px-0">
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
					<div className="border rounded-md mt-5">
						<div className="border-b p-4">
							<div className="flex justify-between items-center">
								<h4 className="text-[17px] font-bold text-primary">
									1. Introduction
								</h4>
								<span
									onClick={() => setOpenIntro(openIntro === 1 ? 0 : 1)}
									className="cursor-pointer flex items-center"
								>
									<p className="text-primary">1 lesson</p>
									{openIntro === 1 ? <FaAngleDown /> : <FaAngleUp />}
								</span>
							</div>
							{openIntro === 1 && (
								<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
									<TiDocumentText className="h-6 w-6" />
									<p className="text-primary text-sm">
										What is dynamic programming?
									</p>
								</div>
							)}
						</div>
						<div className="border-b p-4">
							<div className="flex justify-between items-center">
								<h4 className="text-[17px] font-bold text-primary">
									2. Pattern 1: 0/1 Knapsack
								</h4>
								<span
									onClick={() => setOpenIntro(openIntro === 2 ? 0 : 2)}
									className="cursor-pointer flex items-center"
								>
									<p className="text-primary">13 lesson</p>
									{openIntro === 2 ? <FaAngleDown /> : <FaAngleUp />}
								</span>
							</div>
							{openIntro === 2 && (
								<>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Introduction
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											0/1 Knapsack?
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Solution: 0/1 Knapsack
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Solution: Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Solution: Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Solution: Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Count of Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Solution: Count of Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Target Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Solution: Target Sum
										</p>
									</div>
								</>
							)}
						</div>
						<div className="border-b p-4">
							<div className="flex justify-between items-center">
								<h4 className="text-[17px] font-bold text-primary">
									3. Pattern 1: 0/1 Knapsack
								</h4>
								<span
									onClick={() => setOpenIntro(openIntro === 3 ? 0 : 3)}
									className="cursor-pointer flex items-center"
								>
									<p className="text-primary">10 lesson</p>
									{openIntro === 3 ? <FaAngleDown /> : <FaAngleUp />}
								</span>
							</div>
							{openIntro === 3 && (
								<>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Introduction
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											0/1 Knapsack?
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Solution: 0/1 Knapsack
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
											Solution: Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Solution: Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Solution: Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<TiDocumentText className="h-6 w-6" />
										<p className="text-primary text-sm">
                                 Count of Subset Sum
										</p>
									</div>
								</>
							)}
						</div>
                  <div className="border-b p-4">
							<div className="flex justify-between items-center">
								<h4 className="text-[17px] font-bold text-primary">
                           4. Pattern 2: Unbounded Knapsack
								</h4>
								<span
									onClick={() => setOpenIntro(openIntro === 4 ? 0 : 4)}
									className="cursor-pointer flex items-center"
								>
									<p className="text-primary">12 lesson</p>
									{openIntro === 4 ? <FaAngleDown /> : <FaAngleUp />}
								</span>
							</div>
							{openIntro === 4 && (
								<>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Introduction
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											0/1 Knapsack?
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Pattern 2: Unbounded Knapsack
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Solution: Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Count of Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Count of Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Target Sum
										</p>
									</div>
								</>
							)}
						</div>
                  <div className="border-b p-4">
							<div className="flex justify-between items-center">
								<h4 className="text-[17px] font-bold text-primary">
                           5. Pattern 4: Palindromic Subsequence
								</h4>
								<span
									onClick={() => setOpenIntro(openIntro === 5 ? 0 : 5)}
									className="cursor-pointer flex items-center"
								>
									<p className="text-primary">10 lesson</p>
									{openIntro === 5 ? <FaAngleDown /> : <FaAngleUp />}
								</span>
							</div>
							{openIntro === 5 && (
								<>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Introduction
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											0/1 Knapsack?
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Pattern 2: Unbounded Knapsack
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Solution: Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Count of Subset Sum
										</p>
									</div>
								</>
							)}
						</div>
                  <div className="border-b p-4">
							<div className="flex justify-between items-center">
								<h4 className="text-[17px] font-bold text-primary">
                           6. Pattern 5: Longest Common Substring
								</h4>
								<span
									onClick={() => setOpenIntro(openIntro === 6 ? 0 : 6)}
									className="cursor-pointer flex items-center"
								>
									<p className="text-primary">26 lesson</p>
									{openIntro === 6 ? <FaAngleDown /> : <FaAngleUp />}
								</span>
							</div>
							{openIntro === 6 && (
								<>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Introduction
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											0/1 Knapsack?
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Pattern 2: Unbounded Knapsack
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Solution: Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Count of Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Introduction
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											0/1 Knapsack?
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Pattern 2: Unbounded Knapsack
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Solution: Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Count of Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
											Solution: Equal Subset Sum Partition
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Subset Sum
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Solution: Minimum Subset Sum Difference
										</p>
									</div>
									<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
										<FaLock className="h-4 w-4" />
										<p className="text-primary text-sm">
                                 Count of Subset Sum
										</p>
									</div>
								</>
							)}
						</div>
                  <div className="p-4">
							<div className="flex justify-between items-center">
								<h4 className="text-[17px] font-bold text-primary">
									7. Appendix
								</h4>
								<span
									onClick={() => setOpenIntro(openIntro === 7 ? 0 : 7)}
									className="cursor-pointer flex items-center"
								>
									<p className="text-primary">1 lesson</p>
									{openIntro === 7 ? <FaAngleDown /> : <FaAngleUp />}
								</span>
							</div>
							{openIntro === 7 && (
								<div className="flex justify-start items-center gap-4 pt-4 transition-all duration-500 hover:underline cursor-pointer">
									<TiDocumentText className="h-6 w-6" />
									<p className="text-primary text-sm">
										Contact Us
									</p>
								</div>
							)}
						</div>
					</div>
               <div className="my-10"><hr /></div>
				</div>
			</div>
		</section>
	);
};

export default CourseContent;
