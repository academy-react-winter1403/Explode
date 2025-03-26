import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Fragment } from 'react';
const ImagesSkeleton = () => {
    return (
        <Fragment>
            <Skeleton width={32} height={32} style={{ borderRadius: "50%" }} />
            <Skeleton width={32} height={32} style={{ borderRadius: "50%", position: "relative", right: "-10px" }} />
            <Skeleton width={32} height={32} style={{ borderRadius: "50%", position: "relative", right: "-20px" }} />
        </Fragment>
    )
}

const TitleSkeleton = ({ width }) => {
    return (
        <div className='flex'>
            <Skeleton width={width} height={21} />
        </div>
    )
}

export { ImagesSkeleton, TitleSkeleton }