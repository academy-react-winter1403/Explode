import laptopImage from '../../assets/img/3d-hygge-top-view-of-laptop-glasses-cup-of-coffee-headphones-1 1.png';
import Logo from '../shared/Logo';
import IconSet from '../../components/shared/IconSet';
import { useSelector } from 'react-redux';
const FormImageBanner = () => {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className={` ${darkMode && 'opacity-[0.8]'} bg-secondry  hidden h-[100%] w-[748px] rounded-[32px] px-8 py-16 lg:block`}>
      <Logo />
      <h2 className="mt-16 mb-2 text-[32px] font-semibold">
        شروع یک ماجراجویی
      </h2>
      <span className="text-[20px] font-medium text-[#707070]">
        هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
      </span>
      <div className="mt-16 flex items-center justify-center">
        {' '}
        <IconSet imageAddress={laptopImage} firstSize={368} secondSize={309} />
      </div>
    </div>
  );
};
export default FormImageBanner;
