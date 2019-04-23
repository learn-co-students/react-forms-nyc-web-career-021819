import React from 'react';

class ControlledInput extends React.Component {

  state = {
      firstName: '',
      lastName: ''
  }


  handleLastNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  render(){
    return (
      <form>
        <input type='text' id='firstName' onChange={e => this.handleFirstNameChange(e)} value={this.state.firstName}/>
        <input type='text' id='lastName' onChange={e => this.handleLastNameChange(e)} value={this.state.lastName}/>
      </form>
    )
  }

}

export default ControlledInput;
