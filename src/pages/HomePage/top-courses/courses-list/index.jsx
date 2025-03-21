import { Fragment } from "react"
import Cards from "../../../../components/shared/cards"

const CoursesList = () => {
    return (
        <Fragment>
            <Cards title=' دوره ریکت جی اس'
                isCourse={true}
                author={'محسن اسفندیاری'}
                price={'12000'}
                width={"322px"}
                courseLevel={'حرفه ای'}
                courseCategory={'برنامه نویسی'}
                image={'/src/assets/img/reactPoster.jpg'}
                linkAddress={'/'}
            />

            <Cards title=' دوره ریکت جی اس'
                isCourse={true}
                author={'محسن اسفندیاری'}
                price={'12000'}
                width={"322px"}
                courseLevel={'حرفه ای'}
                courseCategory={'برنامه نویسی'}
                image={'/src/assets/img/reactPoster.jpg'}
                linkAddress={'/courses'}
            />
        </Fragment>


    )
}
export default CoursesList