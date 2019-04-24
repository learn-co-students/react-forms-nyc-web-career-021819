// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {

  state = {
    firstName: "blank"
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value}, console.log(event.target))
  }

  render() {

    return(
      <form>
        <label>First Name:</label>
        <input name="firstName" onChange={event => this.handleInput(event)} value={this.state.firstName}></input>
      </form>
    )
  }
}
