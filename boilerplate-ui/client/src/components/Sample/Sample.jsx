import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setReduxState } from '../../actions/setReduxState';

class Sample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={ () => { this.props.setReduxState(!this.props.reduxState) } }>Change Redux State!</button>
        <br/><br/>
        {this.props.reduxState ? <div>SUPER TRUE!</div> : <div>SUPER FALSE!</div>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxState: state.reduxState
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setReduxState
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Sample);