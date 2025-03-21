import { Link } from 'react-router'
import BlogsList from './blogs-list'
const TopBlogs = () => {
    return (
        <section className='mb-[80px] '>
            {/* Section Title */}
            <h2 className='font-[700] text-[32px] text-center text-thirdly mb-[40px]'>بلاگ های برتر هفته</h2>

            {/* Courses List */}
            <div className='m-[0_auto] max-w-[1360px] gap-[20px] flex justify-between items-center flex-wrap max-[1400px]:p-[0_16px] max-[1400px]:justify-center max-[720px]:flex-nowrap max-[720px]:overflow-x-auto max-[720px]:[&::-webkit-scrollbar]:hidden max-[720px]:[-ms-overflow-style:none] max-[720px]:[scrollbar-width:none] max- max-[720px]:justify-between'>
                <BlogsList />
            </div>

            {/* All Courses Link */}
            <div className='flex justify-center mt-[40px]'>
                <Link to={'/'} className=' rounded-[40px] bg-thirdly p-[8px_16px] text-[16px] font-[500] text-[#FCFCFC]'>مشاهده بیشتر</Link>
            </div>
        </section>
    )
}
export default TopBlogs