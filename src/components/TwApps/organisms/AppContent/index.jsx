import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuterMenu from '../../molecules/MuterMenu';
import UserList from '../../molecules/UserList';
import FatalMessage from '../../molecules/FatalMessage';

/**
 *
 */
class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { errMessage } = this.props;
    return (
      <div className="mutereminder">
        <MuterMenu />
        { errMessage ? <FatalMessage /> : <UserList /> }
      </div>
    );
  }
}

export default connect(
  state => ({
    errMessage: state.errMessage,
  }),
)(ListContainer);
