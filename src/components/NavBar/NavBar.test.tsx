// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

// components
import { NavBar } from './index';

describe('NavBar component', () => {
  it('should be rendered properly', () => {
    const props = {
      userDetails: {
        name: 'Mohammed Ali',
        picture: 'https://url-to-a-real-image-here',
      },
    };
    const wrapper = shallow(<NavBar { ...props }/>);

    expect(wrapper.find('div').length).toEqual(8);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
