import { Fragment, useEffect } from "react"
import BlogsPageTitle from "./Components/BlogsPageTitle"
import BlogList from "./Components/BlogList"
import BlogFilter from "./Components/BlogFilter"
import { useDispatch } from "react-redux"
import { fetchBlogCategories, fetchBlogs } from "../../core/redux/blogSlice"
const Blogs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogs())
        dispatch(fetchBlogCategories())
    }, [])
    return (
        <Fragment>
            <BlogsPageTitle />
            <section className="m-[0_auto] mb-[80px] flex max-w-[1360px] items-start justify-between max-[1460px]:p-[0_16px] max-[1050px]:flex-col max-[1050px]:gap-[40px]">
                <BlogFilter />
                <BlogList />
            </section>
        </Fragment>
    )
}
export default Blogs