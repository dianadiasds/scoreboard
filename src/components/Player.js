import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Player extends Component {
  static propTypes = {
    name : PropTypes.string.isRequired,
    score : PropTypes.number.isRequired
}
  render() {
    return (
      <li className="player">
        <p className="name">{this.props.name} <span>{this.props.score}</span></p>
      </li>
    )
  }
}
