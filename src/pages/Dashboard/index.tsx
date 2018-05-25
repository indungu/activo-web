import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { DashboardProps, DashboardState } from './interfaces';

export class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingCategories: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
          {this.props.categories.map(category => <div key="category.id">{category.name}</div>)}
        <h1>Assets</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
});

export default connect(mapStateToProps)(Dashboard);
