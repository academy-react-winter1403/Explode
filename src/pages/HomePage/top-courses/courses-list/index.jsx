import { Fragment } from "react"
import Cards from "../../../../components/shared/cards"

const CoursesList = () => {
    return (
        <Fragment>
            <Cards title=' دوره ریکت جی اس'
                isCourse={true}
                author={'محسن اسفندیاری'}
                price={'4,500,000'}
                width={"322px"}
                courseLevel={'مقدماتی'}
                courseCategory={'برنامه نویسی'}
                image={'/src/assets/img/reactPoster.jpg'}
                linkAddress={'/'}
                className={'max-[720px]:flex-shrink-0'}
            />

            <Cards title='دوره فیگما'
                isCourse={true}
                author={'محمد حسین خلیل پور'}
                price={'1,000,000'}
                width={"322px"}
                courseLevel={'پیشرفته'}
                courseCategory={'طراحی'}
                image={'/src/assets/img/figma.jpg'}
                linkAddress={'/courses'}
                className={'max-[720px]:flex-shrink-0'}
            />
            <Cards title='دوره جاوااسکریپت'
                isCourse={true}
                author={'محمدحسین بحرالعلومی'}
                price={'2,500,000'}
                width={"322px"}
                courseLevel={'پیشرفته'}
                courseCategory={'برنامه نویسی'}
                image={'/src/assets/img/jsPoster.jpg'}
                linkAddress={'/courses'}
                className={'max-[720px]:flex-shrink-0'}
            />
            <Cards title='دوره طراحی سایت'
                isCourse={true}
                author={'محمدحسین بحرالعلومی'}
                price={'500,000'}
                width={"322px"}
                courseLevel={'پیشرفته'}
                courseCategory={'برنامه نویسی'}
                image={'/src/assets/img/htmcss.jpg'}
                linkAddress={'/courses'}
                className={'max-[720px]:flex-shrink-0'}
            />
        </Fragment>


    )
}
export default CoursesList