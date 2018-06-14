// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Table from './';

describe('Table component', () => {
  it('should render correctly', () => {
    const props = {
      keys: {
        Assignee: { valueKey: 'assignee', colWidth: '35' },
        'Asset Tag': { valueKey: 'assetTag' },
        'Date Added': { valueKey: 'date' },
        'Serial Number': { valueKey: 'serialNumber' },
        Warranty: { valueKey: 'warranty' },
      },
      values:
      [
        {
          assignee: 'Yaba',
          assetTag: 'AND/WEYA/WYRUHS',
          category: 'string',
          date: '07 June 2018',
          id: 1,
          serialNumber: 'C0ABDJFGSKSJK',
          warranty: 'Expired',
        },
      ],
    };
    const wrapper = shallow(
      <Table { ...props } />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
