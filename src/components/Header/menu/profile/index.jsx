import React, { Fragment } from 'react'
import LoggedOut from './LoggedOut'
import LoggedIn from './LoggedIn'
const Profile = () => {
    return (
        <Fragment>
            <LoggedOut />
            <LoggedIn />
        </Fragment>
    )
}
export default Profile