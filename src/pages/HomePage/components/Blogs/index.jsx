import { Link } from 'react-router';
import BlogsList from './BlogsList.jsx';
import PageTitle from '../../../../components/PageTitle/index.jsx';
const TopBlogs = () => {
  return (
    <section className="mb-[80px]">
      {/* Section Title */}
      <PageTitle title="بلاگ های برتر هفته" className="mb-[25px]" />

      {/* Courses List */}
      <div className="m-[0_auto] flex max-w-[1360px] flex-wrap items-center justify-between gap-[20px] max-[1400px]:justify-center max-[1400px]:p-[0_16px]">
        <BlogsList />
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
export default TopBlogs;
