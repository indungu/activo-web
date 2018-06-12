// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import './NavBar.scss';

// components
import UserDetails from '../UserDetails';

// interfaces
import { NavBarProps } from './interfaces';

// helper functions
import truncateName from '../../utils/helpers/truncateName';

export class NavBar extends React.Component<NavBarProps, {}> {
  /**
   * This method gets the pathname of the active page
   * 
   * @param {string} pathname
   * @returns {string} A string with the pathname of the active page
   */
  private isActive (pathname: string): boolean {
    return this.props.location.pathname === pathname;
  }

  render() {
    const { userDetails } = this.props;
    return (
      <React.Fragment>
        <div className="navigation-bar">
          <div className="container flex-vertical">
            <div className="top-nav">
              <div className="left-navbar">
                <img src="images/Logo.svg" className="logo" />
                <p className="logo-name">ACTIVO</p>
              </div>

              <div className="right-navbar">
                <div className="search-bar">
                  <input type="text" className="search-input" />
                  <img className="search-icon" src="images/Loupe.svg" />
                </div>

                <img src="images/Group.svg" className="notification-bell" />

                <div className="profile-details">
                  <UserDetails
                    icon={userDetails.picture}
                    fullName={ truncateName(userDetails.name) }
                    usernameClass="profile-name"
                    iconSize="regular"
                    title={userDetails.name}
                  />
                  <i className="drop-down-icon">&#9662;</i>
                </div>
              </div>
            </div>

            <span className="line"></span>

            <nav className="bottom-nav">
              <ul className="bottom-navlist">
                <li className={`${this.isActive('/dashboard') 
                  ? 'bottom-nav__menu-item--active bottom-nav__menu-item' 
                  : 'bottom-nav__menu-item'}`}>
                  <Link className="content" to="/dashboard">
                    <img src={`images/overview${this.isActive('/dashboard') ?
                      'Active' : ''}.svg`} className="overview-icon" />
                    Overview
                  </Link>
                </li>

                <li className={`${this.isActive('/settings') 
                  ? 'bottom-nav__menu-item--active bottom-nav__menu-item' 
                  : 'bottom-nav__menu-item'}`}>
                  <Link className="content" to="/settings">
                    <img src={`images/settings${this.isActive('/settings') ?
                      'Active' : ''}.svg`} className="settings-icon" />
                    Settings
                  </Link>
                </li>     
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.auth.userDetail.UserInfo,
});

export default connect(mapStateToProps)(NavBar);
