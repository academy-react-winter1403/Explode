import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardsSkeleton = ({ width, height }) => {
    return (
        <div className={`w-[${width}px]`}>
            <Skeleton width={width} height={height} style={{ borderRadius: "32px", marginBottom: "10px" }} />
            <Skeleton width={width} style={{ marginBottom: "10px" }} />
            <div className='flex items-center justify-between'>
                <Skeleton width={120} />
                <Skeleton width={160} />
            </div>
        </div>
    )
}

export default CardsSkeleton