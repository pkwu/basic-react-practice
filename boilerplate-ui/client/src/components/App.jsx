import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import store from '../store.js';

import Sample from './Sample/Sample.jsx';

// import { setReduxState } from '../actions/setReduxState';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Sample}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

const mapStateToProps = state => {
  return {
    // reduxState: state.reduxState
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    // setReduxState
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);