import { Fragment, useEffect, useState } from "react"
import Cards from "../../../../components/shared/cards"
import { getCourseList } from "../../../../core/services/api/courses"

const CoursesList = () => {
    const [topCourses, setTopCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const getCoursesList = async () => {
        const params = {
            Count: 4
        }
        try {
            const result = await getCourseList(params)
            setTopCourses(result)
            setLoading(false)
        }
        catch {

        }
    }

    useEffect(() => {
        getCoursesList()
    }, [])

    return (

        <Fragment>
            {
                loading ? 'loading ' : topCourses.map((course, index) => (

                    <Cards key={index} title={course.title}
                        isCourse={true}
                        author={course.teacherName}
                        price={course.cost}
                        width={"322px"}
                        courseLevel={course.levelName}
                        courseCategory={course.typeName}
                        image={course.tumbImageAddress}
                        linkAddress={`/course-detail/${course.courseId}`}
                        className={'max-[720px]:flex-shrink-0'}
                    />
                ))
            }

        </Fragment>


    )
}
export default CoursesList