// react libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';

// styles
import './DashboardPage.scss';

// components
import AssetCategoryCard from 'components/AssetCategoryCard';
import Button from 'components/Button/Button';

// interfaces
import { DashboardProps, DashboardState } from './interfaces';

export class DashboardPage extends React.Component<
  DashboardProps,
  DashboardState
> {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingCategories: true,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header-row">
            <h2 className="asset-tag">ASSET CATEGORIES</h2>
            <Button size="small" name="Export" icon="images/Fill.png" />
            <Button name="Add Asset" />
          </div>
          
          <div className="asset-category-container">
            {
              this.props.categories.map(category => (
                <AssetCategoryCard
                  key={category.id}
                  name={category.name}
                  count={category.count}
                />
                )
              )
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
});

export default connect(mapStateToProps)(DashboardPage);
