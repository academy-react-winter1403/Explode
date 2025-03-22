import { Fragment, useEffect, useState } from "react"
import Cards from "../../../../components/shared/cards"
import { getBlogsList } from "../../../../core/services/api/blogs"

const BlogsList = () => {
    const [loading, setLoading] = useState(true)
    const [topBlogs, setTopBlogs] = useState([])

    const getTopBlogs = async () => {
        const params = {
            RowsOfPage: 3,
            SortingCol: 'currentView'
        }
        try {
            const { news } = await getBlogsList(params)
            setTopBlogs(news)
            setLoading(false)
        }
        catch {
            setLoading(false)
        }
    }

    useEffect(() => {
        getTopBlogs()
    }, [])

    return (
        <Fragment>
            {
                loading ? 'loading ...' : (
                    topBlogs.map((item, index) => (
                        <Cards key={index} title={item.title}
                            isBlog={true}
                            author={item.addUserFullName}
                            date={item.insertDate}
                            view={item.currentView}
                            width={"431px"}
                            image={item.currentImageAddressTumb}
                            linkAddress={`/blogs/${item.id}`}
                            className={'max-[720px]:flex-shrink-0'}
                        />
                    ))
                )
            }

        </Fragment>


    )
}
export default BlogsList