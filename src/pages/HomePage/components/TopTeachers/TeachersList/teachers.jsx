import React from 'react';
import { Fragment } from 'react';
import IconSet from '../../../../../components/shared/IconSet';

const Teachers = () => {
  return (
    <Fragment>
      <div className="relative top-[40px] flex h-[180px] w-[170px] flex-col items-center justify-evenly max-[750px]:top-[10px] max-[750px]:right-[20px] max-[750px]:order-2">
        <IconSet
          imageAddress={'/src/assets/img/teacher1.png'}
          firstSize={88}
          secondSize={88}
        />
        <div className="flex items-center gap-[5px]">
          <span className="text-[20px] font-[700]">4.2</span>
          <IconSet
            imageAddress={'/src/assets/icons/secondPlace.svg'}
            firstSize={32}
            secondSize={32}
          />
        </div>
        <span className="text-[16px] font-[500]">محسن اسفندیاری</span>
      </div>

      <div className="relative right-[7px] bottom-[40px] flex h-[180px] w-[170px] flex-col items-center justify-evenly max-[750px]:bottom-[60px] max-[750px]:order-1">
        <IconSet
          imageAddress={'/src/assets/img/teacher2.png'}
          firstSize={88}
          secondSize={88}
        />
        <div className="flex items-center gap-[5px]">
          <span className="text-[20px] font-[700]">4.2</span>
          <IconSet
            imageAddress={'/src/assets/icons/firstPlace.svg'}
            firstSize={32}
            secondSize={32}
          />
        </div>
        <span className="text-[16px] font-[500]">محمدحسین بحرالعلومی</span>
      </div>

      <div className="relative top-[40px] flex h-[180px] w-[170px] flex-col items-center justify-evenly max-[750px]:top-[50px] max-[750px]:order-3">
        <IconSet
          imageAddress={'/src/assets/img/teacher3.png'}
          firstSize={88}
          secondSize={88}
        />
        <div className="flex items-center gap-[5px]">
          <span className="text-[20px] font-[700]">4.2</span>
          <IconSet
            imageAddress={'/src/assets/icons/thirdPlace.svg'}
            firstSize={32}
            secondSize={32}
          />
        </div>
        <span className="text-[16px] font-[500]">محمدحسین خلیلپور</span>
      </div>
    </Fragment>
  );
};

export default Teachers;
