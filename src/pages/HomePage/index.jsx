import { Banner } from "./components/Banner/Banner";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";

const HomePage = () => {
  return (
    // Container
    <div className="mb-[73px]">
      {/* Banner */}
      <Banner />

      {/* Progress Bar */}
      <ProgressBar />
    </div >
  )
};
export default HomePage;
