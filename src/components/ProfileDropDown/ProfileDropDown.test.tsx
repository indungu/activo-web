// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// component
import ProfileDropDown from './';

describe('<ProfileDropDown />', () => {
  const props = {
    hidden: false,
  };

  it('should render the dropdown component correctly', () => {
    const wrapper = shallow(<ProfileDropDown { ...props }/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not be rendered when the hidden props passed evaluates to false', () => {
    props.hidden = true;
    const wrapper = shallow(<ProfileDropDown { ...props } />);
    expect(wrapper.contains(<div className="drop-down-item">Log Out</div>)).toBe(false);
  });
});
