// react libraries
import * as React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import AssetCategoryCard from 'components/AssetCategoryCard';
import { DashboardPage } from './';

describe('The dashboard page', () => {
  it('displays a list of categories', () => {
    const categories = 
      [
        {
          count: 345,
          id: '1',
          name: 'monitors',
        },
        {
          count: 9095,
          id: '2',
          name: 'laptops',
        },
      ];
    const wrapper = shallow(<DashboardPage categories={categories} />);

    expect(wrapper.find(AssetCategoryCard).length).toBe(2);
  });
});
