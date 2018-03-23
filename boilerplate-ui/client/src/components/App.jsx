require('./sampleData.js');

import React, { Component } from 'react';

import Profile from './Profile/Profile';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Profile />
    )
  }
}

export default App;



/* ----------------------
-------------------------
SOLUTION BEGINS:
*/

// require('./sampleData.js');

// import React, { Component } from 'react';

// import Profile from './Profile/Profile';

// class App extends Component {
//   constructor() {
//     super();
//   }
  
//   render() {
//     return (
//       <Profile userInfo={window.userData}/>
//     )
//   }
// }

// export default App;

/*
SOLUTION ENDS:
-------------------------
-----------------------*/