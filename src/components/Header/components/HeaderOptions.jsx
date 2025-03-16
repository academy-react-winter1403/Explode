import { AiOutlineMoon } from 'react-icons/ai';
import { CiBellOn } from "react-icons/ci";
const HeaderOptions = () => {
    return (
        <div className="flex items-center gap-[10px] flex-row-reverse">
            {/* Darkmode */}
            <div className="w-[48px] h-[48px] bg-[#2F2F2F] rounded-[50%] cursor-pointer flex items-center text-[#fff] justify-center text-[24px]">
                <AiOutlineMoon />
            </div>

            {/* Notifications */}
            <div className=" flex  items-center justify-center border-[1px] border-[#DCDCDC] w-[48px] h-[48px] rounded-[50%] cursor-pointer relative">
                <CiBellOn className="text-[#2F2F2F] text-[27px]" />
                <div className="bg-[#FF5E5E] w-[16px] h-[16px] absolute flex items-center justify-center text-[#fff] rounded-[50%] text-[10px] top-[32px] right-[0px]">2</div>
            </div>
        </div>
    )
}
export { HeaderOptions }