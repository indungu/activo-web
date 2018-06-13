/// react libraries
import * as React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Navbar from 'components/NavBar';
import { App } from './App';

describe('The application', () => {
  it('mounts the navbar if the page is not / page', () => {
    const location = {
      pathname: '/dashboard',
    };

    const wrapper = shallow(<App location={location} />);

    expect(wrapper.find(Navbar).length).toBe(1);
  });

  it('does not mount the navbar if the page is / page', () => {
    const location = {
      pathname: '/',
    };

    const wrapper = shallow(<App location={location} />);

    expect(wrapper.find(Navbar).length).toBe(0);
  });
});
