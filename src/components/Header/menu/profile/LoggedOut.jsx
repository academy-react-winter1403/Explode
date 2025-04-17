import React from 'react';
import IconSet from '../../../shared/IconSet';
const LoggedOut = ({ arrowShow = true }) => {
  return (
    <div className="relative flex cursor-pointer items-center justify-between gap-[8px]">
      {arrowShow && (
        <IconSet
          imageAddress={'/src/assets/icons/light_arrow_down.svg'}
          firstSize={20}
          secondSize={20}
        />
      )}

      <IconSet
        imageAddress={'/src/assets/img/profile.png'}
        firstSize={40}
        secondSize={40}
        className={'rounded-[50%]'}
      />
    </div>
  );
};
export default LoggedOut;
