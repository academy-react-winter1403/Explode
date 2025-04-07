import Description from './Description';
import TeachersList from './TeachersList';

const TopTeachers = () => {
  return (
    <section className="bg-thirdly m-[0_auto] mb-[80px] rounded-[32px] p-[40px_16px]">
      <div className="m-[0_auto] flex max-w-[1360px] items-center justify-between gap-[20px] text-[#FCFCFC] max-[1170px]:flex-wrap max-[1170px]:justify-center">
        <Description />
        <TeachersList />
      </div>
    </section>
  );
};
export default TopTeachers;
