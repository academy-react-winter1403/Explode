import React, { Fragment } from 'react';
import LoggedOut from './LoggedIn';
import LoggedIn from './LoggedOut';
const Profile = () => {
  return (
    <Fragment>
      <LoggedOut />
      <LoggedIn />
    </Fragment>
  );
};
export default Profile;
