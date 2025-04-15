import heroImg from '../../../../assets/img/Group 102.png'
const HeroSection = () => {
  return (
    <div className="flex w-full border-2 border-red-400">
      <div className="h-60 w-2/5 border-2 border-green-500">
        <img src={heroImg} alt="" className="h-full w-full" />
      </div>
      <div className="w-3/5 border-2 border-blue-400">
        
      </div>
    </div>
  );
};

export default HeroSection;