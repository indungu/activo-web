// react library
import * as React from 'react';

// third-party libraries
import { Link } from 'react-router-dom';

// styles
import './ProfileDropDown.scss';

// helper functions
import { authService } from 'utils/auth';

class ProfileDropDown extends React.Component<{}> {
  private node?: HTMLElement;

  state = {
    dropDownHidden: true,
  };

  /**
   * This is triggered when the component is un-mounted. It performs a clean up by terminating
   * any calls to set-state via the toggleDropDownState method handler.
   * 
   * @returns {void}
   */
  componentWillUnmount() {
    this.toggleDropDownState();
  }

  /**
   * This handler changes the state of the dropDownHidden key
   * in the state object. It also listens for click outside of the component
   * and reacts depending on the state.
   * 
   * @returns {void}
   */
  toggleDropDownState = () => {
    if (this.state.dropDownHidden) {
      document.addEventListener('click', this.handleOutsideClick);
    } else {
      document.removeEventListener('click', this.handleOutsideClick);
    }
    this.setState({ dropDownHidden: !this.state.dropDownHidden });
  }

  /**
   * This handler handles click outside of the ProfileDropDown component.
   * 
   * @returns {void}
   */
  handleOutsideClick = () => {
    this.toggleDropDownState();
  }

  render() {
    const { dropDownHidden } = this.state;
    const paths = [
      { label: 'Log Out', url: '/' },
    ];

    return (
      <React.Fragment>
        <i
          ref={ node => this.node = node }
          onClick={this.toggleDropDownState}
          className="dropdown-icon">&#9662;
        </i>
        {!dropDownHidden && 
          <div className="dropdown-menu">
          {
            paths.map(({ url, label }, index) => (
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
          ))
          }
          </div>
        }
      </React.Fragment>
    );
  }
}

export default ProfileDropDown;
