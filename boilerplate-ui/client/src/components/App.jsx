require('./sampleData.js');

import React, { Component } from 'react';

import Sample from './Profile/Profile.jsx';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Sample userInfo={window.userData}/>
    )
  }
}

export default App;