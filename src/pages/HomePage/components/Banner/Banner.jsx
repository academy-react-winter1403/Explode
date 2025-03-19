import { LandingInfo } from '../Banner/LandingInfo/LandingInfo'
import { LandingTitle } from '../Banner/LandingTitle/LandingTitle'
import { ShowCourses } from '../Banner/ShowCourses/ShowCourses'
const Banner = () => {
    return (
        <section className="m-[0_auto] mb-[260px]  flex flex-wrap justify-evenly pt-[73px]  items-center gap-[40px] max-[650px]:flex-col">
            <LandingInfo />
            <LandingTitle />
            <ShowCourses />
        </section>
    )
}

export { Banner }