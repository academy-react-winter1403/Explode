import IconSet from "../../shared/IconSet"
const Notifications = () => {
    return (
        <div className="relative bg-[#FCFCFC] border-[#DCDCDC] border-[1px] flex items-center justify-center w-[48px] h-[48px] rounded-[50%] cursor-pointer">
            <IconSet imageAddress={'/src/assets/icons/bell.svg'} />
            <div className="absolute bottom-[0px] right-[0px] bg-[red] w-[16px] h-[16px] rounded-[50%] flex items-center justify-center text-[12px] text-[#fff]">2</div>
        </div>
    )
}
export default Notifications