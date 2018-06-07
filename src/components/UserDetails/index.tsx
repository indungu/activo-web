// react library
import * as React from 'react';

// styles
import './UserDetails.scss';

// interfaces
import { UserDetailsProps } from './interfaces';

const UserDetails = (props: UserDetailsProps) => {
  const { icon, fullName, iconSize, usernameClass, title } = props;
  return (
    <React.Fragment>
      <img src={icon} className={iconSize} />
      <p title={title} className={usernameClass}>{fullName}</p>
    </React.Fragment>
  );
};

export default UserDetails;
