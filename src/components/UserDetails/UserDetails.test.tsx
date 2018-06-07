// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

// component
import UserDetails from './index';

describe('<UserDetails />', () => {
  it('should render the user details component', () => {
    const props = {
      fullName: 'Billy Kid',
      icon: 'https://real-image-here',
      iconSize: 'regular',
      title: 'Billy Kid',
      usernameClass: 'name-tag',
    };
    const wrapper = shallow(<UserDetails { ...props }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
