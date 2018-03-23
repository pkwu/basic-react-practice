import React, { Component } from 'react';

class Hobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: this.props.hobbies
    }
    // bind a function here
  }
  
  onClickHandler() {
    this.state.hobbies.push(document.getElementsByName('hobby')[0].value);
    this.setState({
      hobbies: this.state.hobbies
    });
  }

  render() {
    return (
      <div>
        <input name='hobby' type='text'/>
        <button onClick={this.onClickHandler}>Add A Hobby</button>
        <h4> My List of Hobbies! </h4>
        <ul>
          <li>Hobby Entry {/* Replace Me With Dynamic Hobby List Entries */}</li>
        </ul>
      </div>
    )
  }

}

export default Hobbies;

/* ----------------------
-------------------------
SOLUTION BEGINS:
*/

// import React, { Component } from 'react';

// class Hobbies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hobbies: this.props.hobbies
//     }
//     this.onClickHandler = this.onClickHandler.bind(this);
//   }
  
//   onClickHandler() {
//     this.state.hobbies.push(document.getElementsByName('hobby')[0].value);
//     this.setState({
//       hobbies: this.state.hobbies
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input name='hobby' type='text'/>
//         <button onClick={this.onClickHandler}>Add A Hobby</button>
//         <h4> My List of Hobbies! </h4>
//         <ul>
//           {this.props.hobbies && this.props.hobbies.map( hobby => ( <li key={Math.random()}>{hobby}</li> ))}
//         </ul>
//       </div>
//     )
//   }
// }
    
// export default Hobbies;

/*
SOLUTION ENDS:
-------------------------
-----------------------*/