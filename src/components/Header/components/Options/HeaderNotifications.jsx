import { Fragment } from 'react'
import notificationsIcon from '../../../../assets/img/notification.png'
const HeaderNotifications = () => {
    return (
        <Fragment>
            <div className=" flex  items-center justify-center border-[1px] border-[#DCDCDC] w-[48px] h-[48px] rounded-[50%] cursor-pointer relative">
                <span className=" bg-no-repeat bg-center w-[100%] h-[100%]" style={{ backgroundImage: `url(${notificationsIcon})` }}></span>
                <div className="bg-[#FF5E5E] w-[16px] h-[16px] absolute flex items-center justify-center text-[#fff] rounded-[50%] text-[10px] top-[32px] right-[0px]">2</div>
            </div>
        </Fragment>
    )
}
export { HeaderNotifications }