import IconSet from "../../../../components/shared/IconSet"

const TeachersList = () => {
    return (
        <div className="w-[768px]  h-[356px] max-[750px]:h-[800px] bg-[#353535] rounded-[24px] relative flex items-center">
            <IconSet imageAddress={'/src/assets/icons/Star1.svg'} firstSize={43} secondSize={43} className={'absolute left-[40px] top-[-10px]'} />

            <IconSet imageAddress={'/src/assets/icons/Star2.svg'} firstSize={43} secondSize={43} className={'absolute right-[10px] bottom-[-10px]'} />

            <div className="relative w-full h-[158px] max-[750px]:h-[800px] justify-center max-[750px]:flex-col max-[750px]:items-center  flex bg-contain bg-no-repeat bg-center bg-[url('/src/assets/img/blueLine.svg')] max-[750px]:bg-[url('/src/assets/img/blueLine2.svg')]  ">

                <div className="w-[170px] h-[180px] flex flex-col items-center justify-evenly relative top-[40px] max-[750px]:order-2 max-[750px]:top-[15px]">
                    <IconSet imageAddress={'/src/assets/img/teacher1.png'} firstSize={88} secondSize={88} />
                    <div className="flex gap-[5px] items-center">
                        <span className="text-[20px] font-[700]">4.2</span>
                        <IconSet imageAddress={'/src/assets/icons/secondPlace.svg'} firstSize={32} secondSize={32} />
                    </div>
                    <span className="text-[16px] font-[500]">محسن اسفندیاری</span>
                </div>

                <div className="w-[170px] h-[180px] flex flex-col items-center justify-evenly relative  bottom-[40px] max-[750px]:order-1 max-[750px]:bottom-[60px] right-[7px]">
                    <IconSet imageAddress={'/src/assets/img/teacher2.png'} firstSize={88} secondSize={88} />
                    <div className="flex gap-[5px] items-center">
                        <span className="text-[20px] font-[700]">4.2</span>
                        <IconSet imageAddress={'/src/assets/icons/firstPlace.svg'} firstSize={32} secondSize={32} />
                    </div>
                    <span className="text-[16px] font-[500]">محمدحسین بحرالعلومی</span>
                </div>

                <div className="w-[170px] h-[180px] flex flex-col items-center justify-evenly relative  top-[40px] max-[750px]:order-3">
                    <IconSet imageAddress={'/src/assets/img/teacher3.png'} firstSize={88} secondSize={88} />
                    <div className="flex gap-[5px] items-center">
                        <span className="text-[20px] font-[700]">4.2</span>
                        <IconSet imageAddress={'/src/assets/icons/thirdPlace.svg'} firstSize={32} secondSize={32} />
                    </div>
                    <span className="text-[16px] font-[500]">محسن اسفندیاری</span>
                </div>

            </div>
        </div>
    )
}

export default TeachersList