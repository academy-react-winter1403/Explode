import IconSet from "../../shared/IconSet"
import MenuLinks from "./links"
import Profile from "./profile"

const Menu = ({ menuStatus, setMenuStatus }) => {
  return (
    <div className=" flex items-center gap-[10px] ">
      <div className=" p-[4px_24px_4px_4px] bg-thirdly gap-[25px] h-[100%] rounded-[56px] flex items-center justify-between max-[870px]:pr-[4px]">
        <MenuLinks />
        <Profile />
      </div>

      <div onClick={() => setMenuStatus(!menuStatus)} className="w-[56px] h-[56px] flex items-center justify-center bg-thirdly rounded-[50%] cursor-pointer hidden max-[870px]:flex">
        <IconSet imageAddress={'/src/assets/icons/bars.svg'} />
      </div>
    </div>
  )
}
export default Menu