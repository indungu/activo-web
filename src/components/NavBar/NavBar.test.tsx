// react libraries
import * as React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import { NavBar } from './';

describe('NavBar component', () => {
  const props = {
    location: {
      pathname: '',
    },
    userDetails: {
      UserInfo: {
        name: 'Mohammed Ali',
        picture: 'https://url-to-a-real-image-here',
      },
    },
  };

  it('should be rendered properly', () => {
    const wrapper = shallow(<NavBar { ...props }/>);

    expect(wrapper.find('div').length).toEqual(7);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display active overview tab if the pathname is /dashboard', () => {
    props.location.pathname = '/dashboard';

    const wrapper = shallow(<NavBar { ...props } />);
    const overviewListItem = wrapper.find('li.bottom-nav__menu-item--active');
    const overviewImage = overviewListItem.find('img');

    expect(wrapper).toMatchSnapshot();
    expect(overviewImage.props().src).toBe('/images/overviewActive.svg');
  });

  it('should display active settings tab if the pathname is /settings', () => {
    props.location.pathname = '/settings';

    const wrapper = shallow(<NavBar { ...props } />);
    const settingsListItem = wrapper.find('li.bottom-nav__menu-item--active');
    const settingsImage = settingsListItem.find('img');
    
    expect(wrapper).toMatchSnapshot();
    expect(settingsImage.props().src).toBe('/images/settingsActive.svg');
  });

  it('should redirect to auth page if user details is null', () => {
    props.userDetails = null;
    const wrapper = shallow(<NavBar { ...props }/>);
    expect(wrapper.find('Redirect').length).toBe(1);
  });
});
