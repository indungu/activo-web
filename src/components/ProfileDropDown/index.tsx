// react library
import * as React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

// styles
import './ProfileDropDown.scss';

// interfaces
import { ProfileDropDownProps } from './interfaces';

// helper functions
import { authService } from 'utils/auth';

const ProfileDropDown = (props: ProfileDropDownProps) => {
  const paths = [
    { label: 'Log Out', url: '/' },
  ];
  return (
    !props.hidden &&
    <div className="dropdown-menu">
      {paths.map(({ url, label }, index) => (
            <Link
              key={index}
              to={url}
              className="dropdown-menu__link"
            >
              <div
                className="dropdown-menu__item"
                onClick={label === 'Log Out' && authService.logoutUser}
              >{label}</div>
            </Link>
          ))}
    </div>
  );
};

export default ProfileDropDown;
