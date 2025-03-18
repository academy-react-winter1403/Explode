import { TeachersInfo } from "./TeachersInfo"
import { UsersInfo } from "./UsersInfo"
const LandingInfo = () => {
    return (
        <div className="max-[650px]:order-[1]">
            {/* users */}
            <UsersInfo />
            {/* Teachers */}
            <TeachersInfo />
        </div>
    )
}
export { LandingInfo }