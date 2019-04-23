import React from 'react';

class ControlledInput extends React.Component {
  state = {
    beefy: 'Hello Govnah',
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(event)
  }

  handleChange = event => {
    console.log("heyo")
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          name="beefy"
          value={this.state.beefy}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;
