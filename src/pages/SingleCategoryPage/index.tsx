// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';

// components
import Table from 'components/Table';

// thunks (action creators)
import { getAssets } from 'modules/assets';

// interfaces
import { SingleCategoryProps, SingleCategoryState } from './interfaces';

export class SingleCategoryPage extends React.Component <SingleCategoryProps, SingleCategoryState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingSingleCategory: true,
    };
  }

  /**
   * @memberof SingleCategoryPageComponent
   * @returns {null}
   */
  componentDidMount() {
    this.props.getAssets(this.props.match.params.id);
  }

  render() {
    const { assets } = this.props;
    const keys = {
      Assignee: { valueKey: 'assignee', colWidth: '35' },
      'Asset Tag': { valueKey: 'assetTag' },
      'Date Added': { valueKey: 'date' },
      'Serial Number': { valueKey: 'serialNumber' },
      Warranty: { valueKey: 'warranty' },
    };

    return (
      <React.Fragment>
        {
          assets.length > 0 ? <Table keys={keys} values={assets} /> :
          <h1>No Available Assets In this Category.</h1>
        }
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  assets: state.assets.data,
});

export const mapDispatchToProps = dispatch => ({
  getAssets: categoryId => dispatch(getAssets(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategoryPage);
