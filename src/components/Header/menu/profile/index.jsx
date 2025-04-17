import React, { Fragment } from 'react';
import LoggedOut from './LoggedIn';
import LoggedIn from './LoggedOut';
import { Link } from 'react-router';
const Profile = ({ checkLoggedIn }) => {
  return (
    <Fragment>
      {checkLoggedIn ? (
        <Link to="/dashboard">
          {' '}
          <LoggedIn />
        </Link>
      ) : (
        <LoggedOut />
      )}
    </Fragment>
  );
};
export default Profile;
