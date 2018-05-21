import * as React from 'react';
import Props from '../../interfaces/dashboard';
import { connect, Dispatch } from 'react-redux';

class Dashboard extends React.Component<Props, object> {
  render() {
    const { firstname, lastname } = this.props.user;
    return (
      <div>
        <h1>Dashboard</h1>
        <b>User Details</b>
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.dashboard.user
});

export default connect(mapStateToProps)(Dashboard);
