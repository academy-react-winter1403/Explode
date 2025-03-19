import Logo from "./logo";
import Menu from "./menu";
import Socials from "./socials";
const Footer = () => {
  return (
    <footer className="max-[1360px]:p-[73px_16px]">
      <div className="max-w-[1360px] p-[73px_0] m-[0_auto] flex items-center flex-wrap justify-between mt-[73px]  border-t-[1px] border-[#DCDCDC] ">
        <Logo />
        <Menu />
        <Socials />
      </div>
    </footer>
  );
};
export default Footer;
