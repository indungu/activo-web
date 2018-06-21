// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// component
import ProfileDropDown from './';

describe('<ProfileDropDown />', () => {
  const wrapper = shallow(<ProfileDropDown />);
  it('should render the dropdown component correctly', () => {  
    wrapper.setState({ dropDownHidden: false });
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should close the dropdown modal onClick', () => {
    wrapper.setState({ dropDownHidden: false });
    wrapper.find('i').simulate('click');
    expect(wrapper.find('div').length).toBe(0);
  });

  it('should unmount the component when the log out button is clicked', () => {
    wrapper.setState({ dropDownHidden: false });
    const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
    wrapper.find('div.dropdown-menu__item').simulate('click');
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });
});
