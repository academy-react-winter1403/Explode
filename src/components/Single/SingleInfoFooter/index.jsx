import { useState } from 'react';
import IconSet from './../../shared/IconSet/index';
import { useLocation, useNavigate } from 'react-router';
import { CopyLink } from '../../../utils/CopyLink';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCourseToFavoriteList,
  addDisLikeForCourse,
  addLikeForCourse,
} from '../../../core/services/courses';
import { FaSpinner } from 'react-icons/fa';
import { updateCourseLike, updateFavorite } from '../../../redux/courseSlice';
import {
  addBlogToFavoriteList,
  addDisLikeForBlog,
  addLikeForBlog,
} from '../../../core/services/blogs';
import { updateBlogFavorite, updateBlogLike } from '../../../redux/blogSlice';
import toast from 'react-hot-toast';

const SingleInfoFooter = ({
  courseSingle,
  courseCost = 0,
  detail,
  id,
  isFavorite,
  blogSingle,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [copying, setCopying] = useState(false);
  const dispatch = useDispatch();
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const courseFavorite = courseSingle ? isFavorite : false;
  const blogFavorite = blogSingle ? isFavorite : false;
  const [reservedModal, setReservedModal] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [disLikeLoading, setDisLikeLoading] = useState(false);

  const handleCopyLink = async () => {
    const linkToCopy = window.location.origin + location.pathname;
    CopyLink(linkToCopy, setCopying);
  };

  const addToFavorite = async (id) => {
    if (isAuthenticated) {
      if (courseSingle) {
        await addCourseToFavoriteList(id, setFavoriteLoading);
        dispatch(updateFavorite({ favStatus: true }));
      } else {
        await addBlogToFavoriteList(id, setFavoriteLoading);
        dispatch(updateBlogFavorite({ favStatus: true }));
      }
    } else {
      toast.error('ابتدا وارد اکانت کاربری شوید');
      navigate('/auth/login');
    }
  };

  const courseReserve = async () => {
    if (isAuthenticated) {
      setReservedModal(!reservedModal);
    } else {
      toast.error('ابتدا وارد اکانت کاربری شوید');
      navigate('/auth/login');
    }
  };

  const like = async (id) => {
    if (isAuthenticated) {
      if (courseSingle) {
        await addLikeForCourse(id, setLikeLoading);
        dispatch(
          updateCourseLike({
            type: 'like',
            currentUserLike: detail?.currentUserLike,
            currentUserDissLike: detail?.currentUserDissLike,
          }),
        );
      } else {
        await addLikeForBlog(id, setLikeLoading);
        dispatch(
          updateBlogLike({
            type: 'like',
            currentUserIsLike: detail?.currentUserIsLike,
            currentUserIsDissLike: detail?.currentUserIsDissLike,
          }),
        );
      }
    } else {
      toast.error('ابتدا وارد اکانت کاربری شوید');
      navigate('/auth/login');
    }
  };

  const dislike = async (id) => {
    if (isAuthenticated) {
      if (courseSingle) {
        await addDisLikeForCourse(id, setDisLikeLoading);
        dispatch(
          updateCourseLike({
            type: 'dislike',
            currentUserLike: detail?.currentUserLike,
            currentUserDissLike: detail?.currentUserDissLike,
          }),
        );
      } else {
        await addDisLikeForBlog(id, setDisLikeLoading);
        dispatch(
          updateBlogLike({
            type: 'dislike',
            currentUserIsLike: detail?.currentUserIsLike,
            currentUserIsDissLike: detail?.currentUserIsDissLike,
          }),
        );
      }
    } else {
      toast.error('ابتدا وارد اکانت کاربری شوید');
      navigate('/auth/login');
    }
  };

  return (
    <div
      className={`flex ${courseSingle ? 'max-[710px]:justify-center' : 'max-[746px]:justify-center'} mt-[20px] items-center justify-between gap-[10px] max-[710px]:w-[100%]`}
    >
      {/* Reserve / Copy Page Link*/}
      <div>
        {courseSingle ? (
          <span
            onClick={() => courseReserve()}
            className="bg-primary flex cursor-pointer items-center gap-[10px] rounded-[48px] p-[13.5px_44px] text-[15px] font-[700] text-[#fff] max-[710px]:hidden"
          >
            <IconSet imageAddress={'/src/assets/icons/book.svg'} />
            رزرو دوره
          </span>
        ) : (
          <span
            onClick={handleCopyLink}
            className="text-thirdly border-primary flex cursor-pointer items-center gap-[10px] rounded-[48px] border-[1px] p-[13.5px_44px] text-[15px] font-[500] max-[746px]:hidden"
          >
            <IconSet imageAddress={'/src/assets/icons/copy-link.svg'} />{' '}
            {copying ? 'درحال کپی' : 'کپی کردن لینک صفحه'}
          </span>
        )}
      </div>

      {/* Add To Favorite */}
      <div
        onClick={() => addToFavorite(id)}
        className={`flex cursor-pointer items-center gap-[10px] p-[13.5px_44px] ${courseFavorite || blogFavorite ? 'bg-[#04bf3f]' : 'bg-thirdly'} cursor-pointer rounded-[48px] text-[15px] font-[500] text-[#fff]`}
      >
        {favoriteLoading ? (
          <FaSpinner className="animate-spin" />
        ) : (
          <IconSet imageAddress={'/src/assets/icons/archive.svg'} />
        )}{' '}
        {courseFavorite
          ? 'به مورد علاقه ها اضاف شد'
          : blogFavorite
            ? 'به  مورد علاقه ها اضاف شد'
            : 'اضاف به لیست علاقه مندی ها'}
      </div>

      {/* Like / Dislike */}
      <div className="flex items-center gap-[10px]">
        <span
          onClick={() => like(id)}
          className={`${(detail?.currentUserLike == '1' && isAuthenticated) || (detail?.currentUserIsLike && isAuthenticated) ? 'bg-primary' : ''} flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full border-[1px] border-[#DCDCDC]`}
        >
          {likeLoading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <IconSet
              imageAddress={`${(detail?.currentUserLike == '1' && isAuthenticated) || (detail?.currentUserIsLike && isAuthenticated) ? '/src/assets/icons/light-like.svg' : '/src/assets/icons/like.svg'}`}
            />
          )}
        </span>
        <span
          onClick={() => dislike(id)}
          className={`${(detail?.currentUserDissLike == '1' && isAuthenticated) || (detail?.currentUserIsDissLike && isAuthenticated) ? 'bg-[#FF6C6C]' : ''} flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full border-[1px] border-[#DCDCDC]`}
        >
          {disLikeLoading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <IconSet
              imageAddress={`${(detail?.currentUserDissLike == '1' && isAuthenticated) || (detail?.currentUserIsDissLike && isAuthenticated) ? '/src/assets/icons/light-disslike.png' : '/src/assets/icons/dislike.svg'}`}
            />
          )}
        </span>
      </div>

      {/* Reserve (Responsive) */}
      {courseSingle && (
        <div className="fixed right-0 bottom-0 z-800 flex hidden h-[70px] w-[100%] items-center justify-between bg-[#fff] p-[10px_10px] shadow-[0_-3px_20px_#e2e2e2] max-[710px]:flex">
          <span
            onClick={() => courseReserve()}
            className="bg-primary flex cursor-pointer items-center gap-[10px] rounded-[48px] p-[13.5px_44px] text-[15px] font-[700] text-[#fff]"
          >
            <IconSet imageAddress={'/src/assets/icons/book.svg'} />
            رزرو دوره
          </span>
          <span className="text-thirdly hidden text-[16px] font-[500] max-[710px]:block">
            <span className="text-[24px] font-[700]">{courseCost}</span> تومان
          </span>
        </div>
      )}

      {/* Reserved Modal */}
      <div
        className={`${reservedModal ? 'fixed' : 'hidden'} top-0 left-0 z-1000 flex h-[100%] w-[100%] items-center justify-center bg-[rgb(0,0,0)]/50`}
      >
        <div className="flex h-[70%] w-[600px] flex-col items-center rounded-[30px] bg-[#fff] p-[10px] max-[700px]:w-[95%]">
          <h2 className="text-primary text-[20px] font-[700]">
            دوره به لیست رزروی های شما اضافه شد!
          </h2>

          <div className="h-[100%]"></div>

          <div className="flex w-[100%] items-center justify-between">
            <div className="bg-primary cursor-pointer rounded-[40px] p-[9px_75px] text-[20px] font-[700] text-[#fff]">
              رزرو من
            </div>
            <div
              onClick={() => setReservedModal(!reservedModal)}
              className="text-thirdly cursor-pointer rounded-[40px] bg-[#DCDCDC] p-[9px_58px] font-[700] text-[#fff]"
            >
              باشه
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInfoFooter;
