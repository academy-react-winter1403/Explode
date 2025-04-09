import { Fragment } from 'react';
import IconSet from '../../../../../components/shared/IconSet';
import { ValidURL } from '../../../../../utils/ValidUrl';
import {
  ImagesSkeleton,
  TitleSkeleton,
} from '../../../../skeleton/landing-reports';
import clsx from 'clsx';

const UserGroupDisplay = ({
  loading = false,
  count = 0,
  items = [],
  type = 'students',
  label = '',
  defaultImage = '/src/assets/img/usernotfound.avif',
  error = false,
}) => {
  // Configuration constants
  const AVATAR_SIZE = 32;
  const AVATAR_OVERLAP = 10;
  const BORDER_WIDTH = type === 'teachers' ? 3 : 2;
  const BORDER_COLOR = '#FCFCFC';

  // Default student avatars
  const DEFAULT_STUDENT_AVATARS = [
    '/src/assets/img/user.png',
    '/src/assets/img/user2.png',
    '/src/assets/img/user3.png',
  ];

  // Avatar container class
  const avatarContainerClass = 'flex items-center';

  // Avatar common classes
  const avatarBaseClass = clsx(
    'h-[32px] w-[32px] rounded-full bg-contain bg-center bg-no-repeat',
    `border-[${BORDER_WIDTH}px] border-[${BORDER_COLOR}]`,
  );

  if (error) {
    return (
      <div className="flex items-center text-sm text-red-500">
        Failed to load {type === 'students' ? 'students' : 'teachers'} data
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {/* Avatar Group */}
      <div className={avatarContainerClass}>
        {loading ? (
          <ImagesSkeleton />
        ) : type === 'teachers' ? (
          items
            .slice(0, 3)
            .map((teacher, index) => (
              <img
                key={`teacher-${index}`}
                className={clsx(
                  avatarBaseClass,
                  `right-[-${index * AVATAR_OVERLAP}px]`,
                  { relative: index > 0 },
                )}
                src={
                  ValidURL(teacher.pictureAddress)
                    ? teacher.pictureAddress
                    : defaultImage
                }
                alt={teacher.fullName || `Teacher ${index + 1}`}
                loading="lazy"
              />
            ))
        ) : (
          DEFAULT_STUDENT_AVATARS.map((avatar, index) => (
            <IconSet
              key={`student-${index}`}
              imageAddress={avatar}
              firstSize={AVATAR_SIZE}
              secondSize={AVATAR_SIZE}
              className={clsx(
                avatarBaseClass,
                `right-[-${index * AVATAR_OVERLAP}px]`,
                { relative: index > 0 },
              )}
            />
          ))
        )}
      </div>

      {/* Count Label */}
      <div className="relative right-[20px] flex items-center gap-1 text-sm font-medium">
        {loading ? (
          <TitleSkeleton width={type === 'students' ? 130 : 120} />
        ) : (
          <Fragment>
            <span>+{count}</span>
            <span>{label}</span>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default UserGroupDisplay;
