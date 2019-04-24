// Code ControlledInput Component Here
import React, { Component } from 'react';

class ControlledInput extends Component {
  state = {
    firstName: "first",
    lastName: "last"
  }

handleChange = event => {
  console.log(event.target.value);
  this.setState({
    [event.target.name] : event.target.value
  })
}


render(){
  console.log(this.state);
  const {firstName, lastName} = this.state

  return (
    <form>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
      </form>
  )
}
}

export default ControlledInput
