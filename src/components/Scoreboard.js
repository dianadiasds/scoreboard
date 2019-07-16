import React, {Component} from 'react';
import Player from './Player'

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Arien", score: 2 },
      { id: 2, name: "David", score: 5 },
      { id: 3, name: "Mimi",  score: 4 },
    ]
  };
  render(){
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
            {this.state.players.map((player) => {
              return <Player name={player.name} key={player.id} score={player.score}/>
            })}
        </ul>
      </div>
    )
  }
}
