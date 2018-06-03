// react libraries
import * as React from 'react';

// styles
import './NavBar.scss';

class NavBar extends React.Component<{}> {
  render() {
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
                  <img src="images/upic.svg" className="profile-pic" />
                  <p className="profile-name">Silm Momoh</p>
                  <i className="drop-down-icon">&#9662;</i>
                </div>
              </div>
            </div>

            <span className="line"></span>

            <nav className="bottom-nav">
              <ul className="bottom-navlist">
                <li>
                  <img src="images/overview.svg" className="overview-icon" />
                  <a href="#">
                    Overview
                  </a>
                </li>
                <li className="active">
                    <img src="images/settings.svg" className="overview-icon" />
                  <a href="#">
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="dynamic-content container">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
