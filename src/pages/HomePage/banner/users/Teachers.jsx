import { ValidURL } from './../../../../utils/ValidUrl';
const Teachers = ({ loading, teacherCount, teachersList }) => {
    return (
        <div className="flex items-center max-[662px]:pr-[110px]">
            <div className="flex items-center">
                {
                    loading ? ',,,,' : teachersList.map((teacher, index) => {
                        console.log(teacher.pictureAddress)
                        return <img className={`w-[32px] h-[32px] bg-contain bg-center bg-no-repeat relative right-[-${index * 10}px] border-[3px] border-[#FCFCFC] rounded-[50%] `} src={ValidURL(teacher.pictureAddress) ? teacher.pictureAddress : '/src/assets/img/usernotfound.avif'} alt={teacher.fullName} />
                    })
                }

            </div>

            <div className="flex items-center gap-[5px] text-[14px] font-[500] relative right-[-20px]">
                <span>+{loading ? 'loading...' : teacherCount}</span> <span>اساتید برتر جهان</span>
            </div>
        </div>
    )
}
export default Teachers