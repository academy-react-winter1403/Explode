import IconSet from "../../../../components/shared/IconSet"
import Teachers from "./teachers"

const TeachersList = () => {
    return (
        <div className="w-[768px]  h-[356px] max-[750px]:h-[800px] bg-[#353535] rounded-[24px] relative flex items-center">
            <IconSet imageAddress={'/src/assets/icons/Star1.svg'} firstSize={43} secondSize={43} className={'absolute left-[40px] top-[-10px]'} />

            <IconSet imageAddress={'/src/assets/icons/Star2.svg'} firstSize={43} secondSize={43} className={'absolute right-[10px] bottom-[-10px]'} />

            <div className="relative w-full h-[158px] max-[750px]:h-[800px] justify-center max-[750px]:flex-col max-[750px]:items-center  flex bg-contain bg-no-repeat bg-center bg-[url('/src/assets/img/blueLine.svg')] max-[750px]:bg-[url('/src/assets/img/blueLine2.svg')]  ">

                <Teachers />

            </div>
        </div>
    )
}

export default TeachersList