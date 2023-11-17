import Image from "next/image";
import linkedin from "../../images/linkedin.png";
import image from "../../images/profileAvatar.webp";

const AboutSection = () => {
	return (
		<section className="w-full md:w-[60%] mx-auto px-4 md:px-0 pb-10">
			<div className="grid md:grid-cols-3">
				<div className="col-span-2">
					<h1 className="text-h2 leading-[39px] font-bold">
						What people say about our courses
					</h1>
					<div className="grid md:grid-cols-2 justify-center items-start gap-4 mt-5">
						<div className="border border-gray-300 rounded-lg p-4">
							<div>
								<div className="flex justify-between items-center">
									<div className="flex items-center gap-4">
										<Image
											src={image}
											className="rounded-full"
											alt=""
										/>
										<div className="flex flex-col justify-center gap-1">
											<h4 className="text-sm font-bold">MO JAFRI</h4>
											<p className="text-sm font-light">
												Software Engineer
											</p>
										</div>
									</div>
									<Image src={linkedin} className="h-6 w-6 cursor-pointer" alt="" />
								</div>
								<p className="text-[15px] font-medium mt-3">
									The courses which have &quot;grokking&quot; before
									them, are exceptionally well put together! These
									courses magically condense 3 years of CS in short
									bite-size courses and lectures (I have tried System
									Design, OODI, and Coding patterns). The Grokking
									courses are godsent, to be honest.
								</p>
							</div>
						</div>
						<div className="border border-gray-300 rounded-lg p-4">
							<div>
								<div className="flex justify-between items-center">
									<div className="flex items-center gap-4">
										<Image
											src={image}
											className="rounded-full"
											alt=""
										/>
										<div className="flex flex-col justify-center gap-1">
											<h4 className="text-sm font-bold">
												ABHISHEK GUPTA
											</h4>
											<p className="text-sm font-light">
												Software Engineer
											</p>
										</div>
									</div>
									<Image src={linkedin} className="h-6 w-6 cursor-pointer" alt="" />
								</div>
								<p className="text-[15px] font-medium mt-3">
									The courses which have &quot;grokking&quot; before
									them, are exceptionally well put together! These
									courses magically condense 3 years of CS in short
									bite-size courses and lectures (I have tried System
									Design, OODI, and Coding patterns). The Grokking
									courses are godsent, to be honest.
								</p>
							</div>
						</div>
						<div className="border border-gray-300 rounded-lg p-4">
							<div>
								<div className="flex justify-between items-center">
									<div className="flex items-center gap-4">
										<Image
											src={image}
											className="rounded-full"
											alt=""
										/>
										<div className="flex flex-col justify-center gap-1">
											<h4 className="text-sm font-bold">
												AHMET HANIF
											</h4>
											<p className="text-sm font-light">
												Software Engineer
											</p>
										</div>
									</div>
									<Image src={linkedin} className="h-6 w-6 cursor-pointer" alt="" />
								</div>
								<p className="text-[15px] font-medium mt-3">
									The courses which have &quot;grokking&quot; before
									them, are exceptionally well put together! These
									courses magically condense 3 years of CS in short
									bite-size courses and lectures (I have tried System
									Design, OODI, and Coding patterns). The Grokking
									courses are godsent, to be honest.
								</p>
							</div>
						</div>
						<div className="border border-gray-300 rounded-lg p-4">
							<div>
								<div className="flex justify-between items-center">
									<div className="flex items-center gap-4">
										<Image
											src={image}
											className="rounded-full"
											alt=""
										/>
										<div className="flex flex-col justify-center gap-1">
											<h4 className="text-sm font-bold">
												KAUSHIK JONNADULA
											</h4>
											<p className="text-sm font-light">
												Software Engineer
											</p>
										</div>
									</div>
									<Image src={linkedin} className="h-6 w-6 cursor-pointer" alt="" />
								</div>
								<p className="text-[15px] font-medium mt-3">
									The courses which have &quot;grokking&quot; before
									them, are exceptionally well put together! These
									courses magically condense 3 years of CS in short
									bite-size courses and lectures (I have tried System
									Design, OODI, and Coding patterns). The Grokking
									courses are godsent, to be honest.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
