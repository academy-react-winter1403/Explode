import { Fragment } from 'react';
import { ValidURL } from './../../../../utils/ValidUrl';
import { ImagesSkeleton, TitleSkeleton } from '../../../skeleton/landing-reports';

const Teachers = ({ loading, teacherCount, teachersList }) => {
    return (
        <div className="flex items-center max-[662px]:pr-[110px]">
            <div className="flex items-center">
                {
                    loading ? <ImagesSkeleton /> : teachersList.map((teacher, index) => {
                        return <img key={index} className={`w-[32px] h-[32px] bg-contain bg-center bg-no-repeat relative right-[-${index * 10}px] border-[3px] border-[#FCFCFC] rounded-[50%] `} src={ValidURL(teacher.pictureAddress) ? teacher.pictureAddress : '/src/assets/img/usernotfound.avif'} alt={teacher.fullName} />
                    })
                }

            </div>

            <div className="flex items-center gap-[5px] text-[14px] font-[500] relative right-[-20px]">
                {
                    loading ? <TitleSkeleton width={120} /> :
                        <Fragment>
                            <span>+{teacherCount}</span> <span>اساتید برتر جهان</span>
                        </Fragment>
                }
            </div>
        </div>
    )
}
export default Teachers