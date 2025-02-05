
import "./skeleton.css"

type SkeletonProps = {
    width?: number;
    height?: number
}

const Skeleton = ({width = 100, height = 30}: SkeletonProps) => {
    const style = width || height ? {width: `${width}px`, height: `${height}px`} : {}
    return (
     <div className="skeleton-container">
        <div className="skeleton-row" style={style}></div>  
     </div>

)
};

export default Skeleton;