const PageTitle = ({ title, line1, line2 }) => {
    return (
        <section className='max-w-[1360px] m-[80px_auto] text-center '>
            <h1 className="font-[700] text-thirdly text-[40px] mb-[30px]">
                {title}
            </h1>
            <p className="font-[500] text-[18px] text-[#707070]">
                {line1}
                <br />
                {line2}
            </p>
        </section>
    )
}
export default PageTitle