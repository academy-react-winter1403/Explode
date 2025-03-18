import firstUser from '../..//../../assets/img/user.png'
import secondUser from '../../../../assets/img/user2.png'
import thirdUser from '../../../../assets/img/user3.png'
const TeachersInfo = () => {
    return (
        <div className="flex items center mt-[8px]">
            {/* teachers image */}
            <div className='flex'>
                <img className="w-[32px] h-[32px] rounded-[50%] border-[2px] border-[#fff] overflow-hidden" src={firstUser} alt="" />
                <img className="w-[32px] h-[32px] relative right-[-11px] rounded-[50%] border-[2px] border-[#fff] overflow-hidden" src={secondUser} alt="" />
                <img className="w-[32px] h-[32px] relative right-[-22px] rounded-[50%] border-[2px] border-[#fff] overflow-hidden" src={thirdUser} alt="" />
            </div>
            {/* teachers count */}
            <div className='relative right-[-20px] text-thirdly font-[500]'><span className='font-[600]'>+50</span> اساتید برتر جهان </div>
        </div>
    )
}

export { TeachersInfo } 