import IconSet from '../../../../../components/shared/IconSet';
import Teachers from './teachers';

const TeachersList = () => {
  return (
    <div className="relative flex h-[356px] w-[768px] items-center rounded-[24px] bg-[#353535] max-[750px]:h-[800px]">
      <IconSet
        imageAddress={'/src/assets/icons/Star1.svg'}
        firstSize={43}
        secondSize={43}
        className={'absolute top-[-10px] left-[40px]'}
      />

      <IconSet
        imageAddress={'/src/assets/icons/Star2.svg'}
        firstSize={43}
        secondSize={43}
        className={'absolute right-[10px] bottom-[-10px]'}
      />

      <div className="relative flex h-[158px] w-full justify-center bg-[url('/src/assets/img/blueLine.svg')] bg-contain bg-center bg-no-repeat max-[750px]:h-[800px] max-[750px]:flex-col max-[750px]:items-center max-[750px]:bg-[url('/src/assets/img/blueLine2.svg')]">
        <Teachers />
      </div>
    </div>
  );
};

export default TeachersList;
