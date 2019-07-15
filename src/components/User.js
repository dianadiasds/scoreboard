import React, { Component } from 'react'

export default class User extends Component {
  render(){
    return <div> User: <b>{ this.props.name }</b></div>
  }
}


