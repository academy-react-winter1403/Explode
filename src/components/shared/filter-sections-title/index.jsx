const Title = ({ imageSrc, titleText }) => {
    return (
        <div className='flex items-center gap-[10px] mb-[10px]'>
            <span className='bg-center bg-contain w-[24px] h-[24px] flex' style={{ backgroundImage: `url(${imageSrc})` }}></span>
            <span className='text-[16px] font-[500]'>{titleText}</span>
        </div>
    )
}
export default Title