import React, { Component } from 'react';
import Name from '../UserData/Name';
import Birthday from '../UserData/Birthday';
import Hobbies from '../UserData/Hobbies';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': this.props.userInfo.name,
      'birthday': this.props.userInfo.birthday,
      'hobbies': this.props.userInfo.hobbies
    }
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <h4>Welcome to my Profile!</h4><br/><br/>
        <input name='name' type='text' defaultValue='Change My Name' onChange={this.onChangeHandler.bind(this)}></input>
        <Name /><br/><br/>
        -------------------------------------------------<br/><br/>
        <Birthday />
        -------------------------------------------------<br/><br/>
        <Hobbies /><br/><br/>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <h4>Welcome to my Profile!</h4><br/><br/>
  //       <input name='name' type='text' defaultValue='Change My Name' onChange={this.onChangeHandler.bind(this)}></input>
  //       <Name name={this.state.name}/><br/><br/>
  //       -------------------------------------------------<br/><br/>
  //       <Birthday birthday={this.state.birthday}/><br/><br/>
  //       -------------------------------------------------<br/><br/>
  //       <Hobbies hobbies={this.state.hobbies}/><br/><br/>
  //     </div>
  //   )
  // }
}

export default Profile;