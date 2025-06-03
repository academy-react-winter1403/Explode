import parseToHtml from 'html-react-parser';
import IconSet from '../shared/IconSet';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import { CopyLink } from '../../utils/CopyLink';
import { addCourseRate } from '../../core/services/courses';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourseRate } from '../../redux/courseSlice';
import toast from 'react-hot-toast';
import { addBlogRate } from '../../core/services/blogs';
import { updateBlogRate } from '../../redux/blogSlice';
const SingleDescription = ({ detail, courseSingle, blogSingle }) => {
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [copying, setCopying] = useState(false);
  const [starLoading, setStarLoading] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleStarClick = async (id, starRate) => {
    if (isAuthenticated) {
      setHover(0);
      if (courseSingle) {
        await addCourseRate(id, starRate, setStarLoading);
        dispatch(updateCourseRate({ rateNumber: starRate }));
      } else {
        const response = await addBlogRate(id, starRate, setStarLoading);
        response.message !== 'هشدار ایجاد هرزنامه در دیتابیس' &&
          dispatch(updateBlogRate({ rateNumber: starRate }));
      }
    } else {
      toast.error('برای ثبت امتیاز باید لاگین کرده باشید');
      navigate('/auth/login');
    }
  };
  const handleCopyLink = async () => {
    const linkToCopy = window.location.origin + location.pathname;
    CopyLink(linkToCopy, setCopying);
  };
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className="mt-[20px]">
      <h2 className={` ${darkMode ? 'text-[#fff]' : 'text-[#707070]'} mb-[30px] text-[20px] font-[700] `}>
        {courseSingle ? 'توضیحات دوره' : 'توضیحات بلاگ'}
      </h2>
      <div className={` ${darkMode ? 'text-[#fff]' : 'text-thirdly'}   mb-[30px] text-justify text-[16px] font-[500] break-words`}>
        {detail?.describe ? (
          parseToHtml(detail.describe)
        ) : (
          <>
            {
              courseSingle ? <p>توضیحی برای این دوره ثبت نشده است</p> : <p>توضیحی برای این بلاگ ثبت نشده است</p>
            }
          </>
        )}
      </div>
      <div className="flex items-center gap-[15px] max-[600px]:flex-col max-[600px]:items-start">
        <div className="flex items-center gap-[10px]">
          <span className="text-primary text-[16px] font-[600]">
            امتیاز بدید
          </span>
          {starLoading
            ? Array(5)
              .fill()
              .map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={28}
                    className={`animate-spin cursor-pointer text-gray-300 transition-colors`}
                  />
                );
              })
            : Array(5)
              .fill()
              .map((_, index) => {
                const starValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={28}
                    onClick={() =>
                      handleStarClick(
                        courseSingle ? detail.courseId : detail.id,
                        starValue,
                      )
                    }
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                    className={`cursor-pointer transition-colors ${starValue <= (hover || detail.currentUserRateNumber)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                      }`}
                  />
                );
              })}
        </div>
        <span
          onClick={handleCopyLink}
          className={`${blogSingle ? 'hidden max-[746px]:flex' : 'flex'} ${darkMode ? 'text-[#fff]' : 'text-[#707070]'} border-primary cursor-pointer items-center gap-[10px] rounded-[48px] border-[1px] p-[13.5px_44px] text-[15px] font-[500]`}
        >
          <IconSet imageAddress={'/src/assets/icons/copy-link.svg'} />{' '}
          {copying ? 'درحال کپی' : 'کپی کردن لینک صفحه'}
        </span>
      </div>
    </div>
  );
};

export default SingleDescription;
