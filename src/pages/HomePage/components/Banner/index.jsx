import HomePageTitle from './HomePageTitle.jsx';
import NewCoursesLink from './NewCoursesLink.jsx';
import UserStatistics from './UserStatistics/index.jsx';

const Banner = () => {
  return (
    <section className="m-[0_auto] flex max-w-[1360px] items-center justify-evenly max-[1360px]:p-[0_16px] max-[860px]:flex-wrap max-[662px]:gap-[60px]">
      <UserStatistics />
      <HomePageTitle />
      <NewCoursesLink />
    </section>
  );
};
export default Banner;
