import React, { Component } from 'react'

export default class User extends Component {
  state = { present : true }

  toggle = () => {
    this.setState({present: !this.state.present})
  }

  render(){
    return (
      <div>
        <div> User: <b>{ this.props.name }</b></div>
        <div> <b>{ this.props.name }</b> { this.state.present ? 'is' : 'is not' } present</div>
        <button onClick={this.toggle}>Toggle</button>
      </div>)
  }
}


