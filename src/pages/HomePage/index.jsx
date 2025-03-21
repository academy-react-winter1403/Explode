import AcademyGoals from "./academy-goals";
import Banner from "./banner";
import TopBlogs from "./blogs";
import OurServices from "./our-services";
import { ProgressBar } from "./progress-bar";
import TopCourses from "./top-courses";
import TopTeachers from "./top-teachers";
const HomePage = () => {
  return (
    <section className="mt-[80px]">
      <Banner />
      <ProgressBar />
      <AcademyGoals />
      <OurServices />
      <TopCourses />
      <TopBlogs />
      <TopTeachers />
    </section>
  )
};
export default HomePage;