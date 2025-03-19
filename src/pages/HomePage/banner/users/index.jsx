import React from 'react'
import IconSet from '../../../../components/shared/IconSet'
const Users = () => {
    return (
        <div className="w-[295px] max-[647px]:order-1 max-[647px]:w-[100%] max-[647px]:flex max-[647px]:flex-col max-[647px]:items-center">
            {/* Students */}
            <div className="flex items-center ">
                <div className="flex items-center">
                    <IconSet imageAddress={'/src/assets/img/user.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block"} />
                    <IconSet imageAddress={'/src/assets/img/user2.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block relative right-[-10px]"} />
                    <IconSet imageAddress={'/src/assets/img/user3.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block relative right-[-20px]"} />
                </div>
                <div className="flex items-center  gap-[5px] text-[14px] font-[500] relative right-[-20px]">
                    <span>+100</span> <span>دانشجوی فعال در دوره</span>
                </div>
            </div>

            {/* Teachers */}
            <div className="flex items-center max-[647px]:pr-[110px]">
                <div className="flex items-center">
                    <IconSet imageAddress={'/src/assets/img/user.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] "} />
                    <IconSet imageAddress={'/src/assets/img/user2.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block relative right-[-10px]"} />
                    <IconSet imageAddress={'/src/assets/img/user3.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block relative right-[-20px]"} />
                </div>
                <div className="flex items-center gap-[5px] text-[14px] font-[500] relative right-[-20px]">
                    <span>+50</span> <span>اساتید برتر جهان</span>
                </div>
            </div>

        </div>
    )
}
export default Users