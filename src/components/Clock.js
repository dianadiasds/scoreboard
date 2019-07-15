import React, { Component} from 'react'

export default class Clock extends Component {
  state = {
    today: new Date()
  }
  getHours = () => {
    return this.state.today.getHours()
  }
  getMinutes = () => {
    return this.state.today.getMinutes()
  }
  getSeconds = () => {
    const getSecondsZero = this.state.today.getSeconds()
    if(getSecondsZero < 10){
      return `0${this.state.today.getSeconds()}`
    }
    return getSecondsZero
  }

  componentDidMount() {
    setInterval(
      () => this.second(),
      1000
    );
  }
  second() {
    this.setState({
      today: new Date()
    });
  }
  render(){
    return(

      <p>Clock <span>{this.getHours()}</span> : <span>{this.getMinutes()}</span> : <span>{this.getSeconds()}</span></p>

    )
  }

}
