// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {

  state = {
    firstName: 'Khaled',
    lastName: 'Khalifeh'
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { firstName, lastName } = this.state


    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.onChange}
        />
      </form>
    )
  }
}
