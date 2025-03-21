import { Fragment } from "react"
import Cards from "../../../../components/shared/cards"

const BlogsList = () => {
    return (
        <Fragment>
            <Cards title='فرق ری‌اکت با نکست جی‌اس چیست؟'
                isBlog={true}
                author={'محسن اسفندیاری'}
                date={"27 اردیبهشت 1403"}
                view={"200"}
                width={"431px"}
                image={'/src/assets/img/reactPoster.jpg'}
                linkAddress={'/'}
                className={'max-[720px]:flex-shrink-0'}
            />

            <Cards title='فیگما یا ادوبی ایکس‌دی؟'
                isBlog={true}
                author={'محمد حسین خلیل پور'}
                width={"431px"}
                date={"27 اردیبهشت 1403"}
                view={"200"}
                image={'/src/assets/img/figma.jpg'}
                linkAddress={'/courses'}
                className={'max-[720px]:flex-shrink-0'}
            />
            <Cards title='زبان جاوا اسکریپت در چه حوزه ای به کار م'
                isBlog={true}
                width={"431px"}
                view={"200"}
                date={"27 اردیبهشت 1403"}
                author={'محمدحسین بحرالعلومی'}
                image={'/src/assets/img/jsPoster.jpg'}
                linkAddress={'/courses'}
                className={'max-[720px]:flex-shrink-0'}
            />

        </Fragment>


    )
}
export default BlogsList