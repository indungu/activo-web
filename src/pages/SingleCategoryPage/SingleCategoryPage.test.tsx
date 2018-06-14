// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

import { SingleCategoryPage } from './index';

describe('SingleCategoryPage', () => {
  it('should display message if no assets in the category', () => {
    const props = {
      assets: [],
      getAssets: jest.fn(),
      match: {
        params: {
          id: '898989',
        },
      },
    };
    const wrapper = shallow(<SingleCategoryPage { ...props } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display assets on a table', () => {
    const props = {
      assets: 
      [
        {
          assignee: 'Yaba',
          assetTag: 'AND/WEYA/WYRUHS',
          categoryId: 'string',
          date: '07 June 2018',
          id: '1',
          serialNumber: 'C0ABDJFGSKSJK',
          warranty: 'Expired',
        },
      ],
      getAssets: jest.fn(),
      match: {
        params: {
          id: '898989',
        },
      },
    };
    const wrapper = shallow(<SingleCategoryPage { ...props } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the getAssets function when component is mounted ', () => {
    const props = {
      assets: [],
      getAssets: jest.fn(),
      match: {
        params: {
          id: '898989',
        },
      },
    };
    shallow(<SingleCategoryPage { ...props } />);
    expect(props.getAssets).toHaveBeenCalledWith('898989');
  });
});
