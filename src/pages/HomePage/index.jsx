import { LandingInfo } from "./Banner/LandingInfo/LandingInfo";
import { LandingTitle } from "./Banner/LandingTitle/LandingTitle";
import { ShowCourses } from "./Banner/ShowCourses/ShowCourses";

const HomePage = () => {
  return (
    // Container
    <div >
      {/* Row */}
      <div className="m-[0_auto] max-w-[1360px] flex flex-wrap justify-evenly pt-[73px]  items-center gap-[40px] max-[650px]:flex-col">
        <LandingInfo />
        <LandingTitle />
        <ShowCourses />
      </div>
    </div>
  )
};
export default HomePage;
