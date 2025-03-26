import Users from "./users";
import Title from "./title";
import NewCoursesLink from "./courses-list-link"
const Banner = () => {
    return (
        <section className="flex items-center justify-evenly max-w-[1360px] m-[0_auto] max-[1360px]:p-[0_16px] max-[860px]:flex-wrap max-[662px]:gap-[60px]">
            <Users />
            <Title />
            <NewCoursesLink />
        </section>
    )
}
export default Banner