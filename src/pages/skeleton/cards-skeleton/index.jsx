import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardsSkeleton = ({ width, height }) => {
    return (
        <div style={{ width: width }}>
            <Skeleton height={height} style={{ borderRadius: "32px", marginBottom: "10px", width: "100%" }} />
            <Skeleton style={{ marginBottom: "10px", width: "100%" }} />
            <div className='flex items-center justify-between'>
                <Skeleton width={120} />
                <Skeleton width={160} />
            </div>
        </div>
    )
}

export default CardsSkeleton