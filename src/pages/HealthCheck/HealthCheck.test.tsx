import * as React from 'react';
import { shallow } from 'enzyme';
import HealthCheck from './';

describe('<HealthCheck />', () => {
  it('should render the Health check component correctly', () => {
    const wrapper = shallow(<HealthCheck />);
    expect(wrapper).toMatchSnapshot();
  });
});
