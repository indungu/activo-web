// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import AssetCategoryCard from './index';

describe('AssetCategoryCard component', () => {
  it('should render correctly', () => {
    const props = {
      count: 10,
      name: 'Mac',
    };
    const wrapper = shallow(
      <AssetCategoryCard { ...props } />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
