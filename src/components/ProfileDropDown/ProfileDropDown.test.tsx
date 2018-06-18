// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// component
import ProfileDropDown from './';

describe('<ProfileDropDown />', () => {

  it('should render the dropdown component correctly', () => {
    const wrapper = shallow(<ProfileDropDown />);
    wrapper.setState({ dropDownHidden: false });
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should close the dropdown modal onClick', () => {
    const wrapper = shallow(<ProfileDropDown />);
    wrapper.setState({ dropDownHidden: false });
    wrapper.find('i').simulate('click');
    expect(wrapper.find('div').length).toBe(0);
  });
});
