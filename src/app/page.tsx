import Banner from "@/components/PageComponents/Banner";
import AboutSection from "@/components/PageComponents/AboutSection";
import CourseContent from "@/components/PageComponents/CourseContent";
import CourseOverview from "@/components/PageComponents/CourseOverview";

export default function Home() {
	return (
		<div>
			<Banner />
			<CourseOverview />
         <CourseContent />
         <AboutSection />
		</div>
	);
}
