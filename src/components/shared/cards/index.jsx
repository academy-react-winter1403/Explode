import { Link } from "react-router"
import IconSet from './../IconSet/index';
const Cards = ({
    title = '',
    author = '',
    image = '',
    price = false,
    date = false,
    view = false,
    courseLevel = false,
    courseCategory = false,
    width = '',
    height = '',
    className,
    isCourse = false,
    isBlog = false,
    linkAddress
}) => {
    const editedTitle = title.length > 35 ? title.slice(0, 40) + '...' : title
    return (
        <div className={className || null} style={{ width: `${width || null}`, height: `${height || null}` }}>
            <Link to={linkAddress} className="relative block w-[100%] h-[293px] mb-[10px]">
                <img src={image || null} alt={title || null} className={`rounded-[32px] w-[100%] h-[100%]`} />
                {
                    isCourse && <div className="flex gap-[5px] absolute  top-[10px] right-[15px]">
                        {courseLevel && <span className="p-[2px_8px] bg-[#FF37F5] rounded-[32px] text-[14px] font-[500] text-[#FCFCFC]">{courseLevel}</span>}
                        {courseCategory && <span className="p-[2px_8px] bg-primary rounded-[32px] text-[14px] font-[500] text-[#FCFCFC]">{courseCategory}</span>}
                    </div> || null
                }
            </Link>
            <h2 className="font-[700] text-[24px] mb-[10px]"><Link to={linkAddress}>{editedTitle || null}</Link></h2>
            <div className="flex justify-between items-center">
                <span className="text-[#707070] text-[14px] font-[500]">{author || null}</span>
                {
                    isCourse && <div>
                        <span className="text-[16px] text-thirdly font-[700]">{price} <span className="text-[14px] text-thirdly font-[500]">تومان</span></span>
                    </div> || null
                }
                {
                    isBlog && <div className="flex gap-[10px]">
                        <span className="flex items-center gap-[5px] text-[14px] font-[500] text-[#707070]">
                            {date}
                            <IconSet imageAddress={'/src/assets/icons/calender.svg'} firstSize={20} secondSize={20} />
                        </span>
                        <span className="flex items-center gap-[5px] text-[14px] font-[500] text-[#707070]">
                            {view}
                            <IconSet imageAddress={'/src/assets/icons/view.svg'} firstSize={20} secondSize={20} />
                        </span>
                    </div> || null
                }
            </div>
        </div>
    )
}
export default Cards