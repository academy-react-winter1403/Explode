
import MainComments from "./SingleComment/MainComments"
import ShowAllComments from "./SingleComment/ShowAllComments"

const SingleComments = ({ courseSingle, title, singleId, userId }) => {

    return (
        <>
            {/* Part Title */}
            <h2 className="font-[700] text-[20px] text-[#707070] mt-[60px]">
                نظر دانشجو ها و اساتید
            </h2>

            {/* Comments Container */}
            <div className="m-[30px_0_70px_0] flex max-[700px]:flex-col max-[700px]:items-center gap-[15px] items-start justify-between">
                <ShowAllComments
                    title={title}
                    courseSingle={courseSingle}
                    singleId={singleId}
                    userId={userId}
                />
                <MainComments
                    courseSingle={courseSingle}
                    userId={userId}
                />
            </div>
        </>
    )
}

export default SingleComments