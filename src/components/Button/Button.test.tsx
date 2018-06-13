// react libraries
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Button from './Button';

describe('The button component', () => {
  const TEST_ICON = 'test-icon';
  const TEST_NAME = 'test-name';
  const TEST_TYPE = 'test-type';
  const TEST_SIZE = 'test-size';

  it('displays a button with classes "button regular hollow" when mounted with no configuration props', () => {
    const wrapper = mount(<Button name={TEST_NAME} />);
    const button = wrapper.find('button');

    expect(button).toMatchSnapshot();
    expect(button.props().className).toBe('button regular hollow');
  });

  it('displays an image if the icon prop is passed', () => {
    const wrapper = mount(<Button name="test-name" icon={TEST_ICON} />);
    const img = wrapper.find('img');

    expect(wrapper).toMatchSnapshot();
    expect(img.props().src).toBe(TEST_ICON);
  });

  it('overwrites type and size props when values are provided', () => {
    const wrapper = mount(<Button name={TEST_NAME} type={TEST_TYPE} size={TEST_SIZE} icon={TEST_ICON} />);
    const button = wrapper.find('button');

    expect(wrapper).toMatchSnapshot();
    expect(button.props().className).toBe(`button ${TEST_SIZE} ${TEST_TYPE}`);
  });
});
