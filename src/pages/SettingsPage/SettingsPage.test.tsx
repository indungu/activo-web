// react libraries
import * as React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import SettingsPage from './';

describe('The Settings page', () => {
  it('displays the page title: Settings Page', () => {
    const wrapper = shallow(<SettingsPage />);

    expect(wrapper.contains('Settings Page')).toBe(true);
  });
});
