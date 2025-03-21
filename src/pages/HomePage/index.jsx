import AcademyGoals from "./academy-goals";
import Banner from "./banner";
import OurServices from "./our-services";
import { ProgressBar } from "./progress-bar";
import TopTeachers from "./top-teachers";
const HomePage = () => {
  return (
    <section className="mt-[80px]">
      <Banner />
      <ProgressBar />
      <AcademyGoals />
      <OurServices />
      <TopTeachers />
    </section>
  )
};
export default HomePage;