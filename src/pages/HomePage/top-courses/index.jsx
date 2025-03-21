import React from 'react'
import { Link } from 'react-router'
import Cards from '../../../components/shared/cards'
const TopCourses = () => {
    return (
        <section className='mb-[80px] '>
            <h2 className='font-[700] text-[32px] text-center text-thirdly mb-[40px]'>دوره های برتر هفته</h2>

            <div className='m-[0_auto] max-w-[1360px] flex justify-between items-center' >
                <Cards title=' دوره ریکت جی اس'
                    isCourse={true}
                    author={'محسن اسفندیاری'}
                    price={'12000'}
                    width={"322px"}
                    height={"366px"}
                    courseLevel={'حرفه ای'}
                    courseCategory={'برنامه نویسی'}
                    image={'/src/assets/img/reactPoster.jpg'}
                />
                <Cards title=' دوره ریکت جی اس'
                    isCourse={true}
                    author={'محسن اسفندیاری'}
                    price={'12000'}
                    width={"322px"}
                    height={"366px"}
                    courseLevel={'حرفه ای'}
                    courseCategory={'برنامه نویسی'}
                    image={'/src/assets/img/reactPoster.jpg'}
                />
                <Cards title=' دوره ریکت جی اس'
                    isCourse={true}
                    author={'محسن اسفندیاری'}
                    price={'12000'}
                    width={"322px"}
                    height={"366px"}
                    courseLevel={'حرفه ای'}
                    courseCategory={'برنامه نویسی'}
                    image={'/src/assets/img/reactPoster.jpg'}
                />
                <Cards title=' دوره ریکت جی اس'
                    isCourse={true}
                    author={'محسن اسفندیاری'}
                    price={'12000'}
                    width={"322px"}
                    height={"366px"}
                    courseLevel={'حرفه ای'}
                    courseCategory={'برنامه نویسی'}
                    image={'/src/assets/img/reactPoster.jpg'}
                />
                
            </div>

            <div className='flex justify-center mt-[40px]'>
                <Link to={'/'} className=' rounded-[40px] bg-thirdly p-[8px_16px] text-[16px] font-[500] text-[#FCFCFC]'>مشاهده بیشتر</Link>
            </div>
        </section>
    )
}
export default TopCourses