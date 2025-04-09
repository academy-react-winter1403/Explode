import { Link } from 'react-router';
import IconSet from '../shared/IconSet';
import { formatDate } from '../../utils/DateFormatter';
import { ValidURL } from '../../utils/ValidUrl';

const CourseCards = ({
  title = '',
  author = '',
  image = '',
  price = false,
  date = false,
  view = false,
  courseLevel = false,
  courseCategory = false,
  width = '',
  height = '',
  className,
  isCourse = false,
  isBlog = false,
  linkAddress,
}) => {
  //card for products and blogs
  const editedTitle = title.length > 27 ? title.slice(0, 26) + '...' : title;
  const dateFormat = formatDate(date);
  const isValidURL = ValidURL(image);
  return (
    <div
      className={className || null}
      style={{ width: `${width || null}px`, height: `${height || null}px` }}
    >
      <Link
        to={linkAddress}
        className={`relative mb-[10px] block h-[293px]`}
        style={{ width: width + 'px' }}
      >
        <img
          src={isValidURL ? image : '/src/assets/img/not-set-image.jpg'}
          alt={title || null}
          className={`h-[100%] rounded-[32px]`}
          style={{ width: '100%' }}
        />
        {(isCourse && (
          <div className="absolute top-[10px] right-[15px] flex gap-[5px]">
            {courseLevel && (
              <span className="rounded-[32px] bg-[#FF37F5] p-[2px_8px] text-[14px] font-[500] text-[#FCFCFC]">
                {courseLevel}
              </span>
            )}
            {courseCategory && (
              <span className="bg-primary rounded-[32px] p-[2px_8px] text-[14px] font-[500] text-[#FCFCFC]">
                {courseCategory}
              </span>
            )}
          </div>
        )) ||
          null}
      </Link>
      <h2 className="mb-[10px] text-[24px] font-[700]">
        <Link to={linkAddress}>{editedTitle || null}</Link>
      </h2>
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-[500] text-[#707070]">
          {author || null}
        </span>
        {(isCourse && (
          <div>
            <span className="text-thirdly text-[16px] font-[700]">
              {price}{' '}
              <span className="text-thirdly text-[14px] font-[500]">تومان</span>
            </span>
          </div>
        )) ||
          null}
        {(isBlog && (
          <div className="flex gap-[10px]">
            <span className="flex items-center gap-[5px] text-[14px] font-[500] text-[#707070]">
              {dateFormat}
              <IconSet
                imageAddress={'/src/assets/icons/calender.svg'}
                firstSize={20}
                secondSize={20}
              />
            </span>
            <span className="flex items-center gap-[5px] text-[14px] font-[500] text-[#707070]">
              {view}
              <IconSet
                imageAddress={'/src/assets/icons/view.svg'}
                firstSize={20}
                secondSize={20}
              />
            </span>
          </div>
        )) ||
          null}
      </div>
    </div>
  );
};
export default CourseCards;
