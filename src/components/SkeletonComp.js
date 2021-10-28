import { Skeleton } from "@mui/material"


const SkeletonComp = () => {
    return (
        <div>
            <Skeleton variant="rectangular" animation="wave"  width={210} height={118} />
        </div>
    )
}

export default SkeletonComp
