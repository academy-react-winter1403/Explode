import laptopImage from '../../assets/img/3d-hygge-top-view-of-laptop-glasses-cup-of-coffee-headphones-1 1.png';
import { WebSiteLogo } from '../../components/Header/components/Logo/WebSiteLogo';
import IconSet from '../../components/shared/iconSet';
const FormImageBanner = () => {
  return (
    <div className="bg-secondry h-[100%] w-[748px] rounded-[32px] p-8">
      <WebSiteLogo />
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
