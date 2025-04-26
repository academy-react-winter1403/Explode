import { useSelector } from "react-redux"
import PageTitle from "../../../components/PageTitle"


const BlogsPageTitle = () => {
    const { darkMode } = useSelector((state) => state.darkMode)
    return (
        <div className="flex flex-col gap-2">
            <PageTitle
                title="اطلاعات بیشتر ، درک بهتر"
                size={40}
                className={`  ${darkMode ? 'text-[#fff]' : 'text-[#707070]'} no-break mt-[30px] mb-[16px] max-w-[500px] text-[40px] font-[700]`}
            />
            <p className={` ${darkMode ? 'text-[#fff]' : 'text-[#707070]'} mx-auto mb-[80px] max-w-[1360px] text-center text-[18px] font-[500] `}>
                ما در بلاگ ها اطلاعات شما رو نسبت به
                <br />
                تکنولوژی ای که یاد میگیرید بیشتر میکنیم
            </p>
        </div>
    )
}

export default BlogsPageTitle