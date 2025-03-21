import AcademyGoals from "./academy-goals";
import Banner from "./banner";
import OurServices from "./our-services";
import { ProgressBar } from "./progress-bar";

const HomePage = () => {
  return (
    <section className="mt-[80px]">
      <Banner />
      <ProgressBar />
      <AcademyGoals />
      <OurServices />
    </section>
  )
};
export default HomePage;
