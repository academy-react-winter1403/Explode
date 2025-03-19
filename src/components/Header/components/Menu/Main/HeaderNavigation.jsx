import { MainMenu } from "./MainMenu";
import { Fragment, useState } from "react";
import { ResponsiveMenu } from "../Responsive-Menu/ResponsiveMenu";
const HeaderNavigation = () => {
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <Fragment>
            <MainMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
            <ResponsiveMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
        </Fragment>
    )
}
export { HeaderNavigation }