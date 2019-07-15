import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
  render() {
    return (
      <div>
        <div><User name='Michael Douglas'/></div>
        <div><User name='Chuck Norris'/></div>
      </div>
    )
  }
}
