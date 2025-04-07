import AcademyGoals from './components/AcademyGoals';
import Banner from './components/banner';
import TopBlogs from './components/Blogs';
import OurServices from './components/ourServices';
import ProgressBar from './components/ProgressBar';
import TopCourses from './components/TopCourses';
import TopTeachers from './components/TopTeachers';

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
  );
};
export default HomePage;
