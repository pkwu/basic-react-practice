import React, { Component } from 'react';

class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'month': 'MO',
      'date': 'DD',
      'year': 'YR'
    }
  }
  
  onClickHandler() {
    for (let key in this.props.birthday) {
      this.setState({ /* FILL ME IN */ });
    }
  }  
  
  render() {
    return (
      <div>
        <button onClick={this.onClickHandler.bind(this)}>POPULATE</button>
        <h5>BIRTHDAY: </h5>
        {this.state.month}/{this.state.date}/{this.state.year}
      </div>
    )
  }
}

export default Birthday;











  // onClickHandler() {
  //   for (let key in this.props.birthday) {
  //     this.setState({[key]: this.props.birthday[key]});
  //   }
  // }  