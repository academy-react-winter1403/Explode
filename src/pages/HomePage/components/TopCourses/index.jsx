import { Link } from 'react-router';
import CoursesList from './CoursesList';
import PageTitle from '../../../../components/PageTitle';

const TopCourses = () => {
  return (
    <section className="mb-[80px]">
      {/* Section Title */}
      <PageTitle title="دوره های برتر هفته" className="mb-[25px]" />

      {/* Courses List */}
      <div className="m-[0_auto] flex max-w-[1360px] flex-wrap items-center justify-between gap-[20px] max-[1400px]:justify-center max-[1400px]:p-[0_16px]">
        <CoursesList />
      </div>

      {/* All Courses Link */}
      <div className="mt-[40px] flex justify-center">
        <Link
          to={'/'}
          className="bg-thirdly rounded-[40px] p-[8px_16px] text-[16px] font-[500] text-[#FCFCFC]"
        >
          مشاهده بیشتر
        </Link>
      </div>
    </section>
  );
};
export default TopCourses;
