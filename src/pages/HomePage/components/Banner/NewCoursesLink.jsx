import { Link } from 'react-router';
import Button from '../../../../components/shared/Button';
const NewCoursesLink = () => {
  return (
    <div className="flex w-[295px] flex-col items-center max-[662px]:order-2">
      <p className="text-thirdly mb-[20px] text-[18px] font-[500]">
        همین حالا <br /> شروع کن یاد بگیری
      </p>
      <Link to={'/courses'}>
        <Button className="bg-thirdly rounded-[40px] p-[12px_16px] text-[16px] font-[500] text-[#FCFCFC]">
          جدیدترین دوره ها
        </Button>
      </Link>
    </div>
  );
};
export default NewCoursesLink;
