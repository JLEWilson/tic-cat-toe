import React from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import PlayerForm from './PlayerForm';
import ScoreCard from './ScoreCard';
import WinScreen from './WinScreen';

class StateControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      displayForm: true,
      displayWin: false,
      turn: 0 // 0 = noone, 1 = p1, 2 = p2
    };
  }
  handlePlayers = (players) => {
    const player1 =  {
      name: players.p1Name,
      score: 0,
      tiles: []
    };
    const player2 = {
      name: players.p2Name,
      score: 0,
      tiles: []
    };
    this.setState({
      players: [
        player1,
        player2
      ],
      displayForm: false,
      turn: 1
    });
  }
  handleSwapTuns = () => {
    let nextTurn;
    if(this.state.turn === 1){
      nextTurn = 2;
    } else {
      nextTurn = 1;
    }
    this.setState({
      turn: nextTurn
    });
  }
  handleClickGameCell = (id) => {
    let tempPlayers = this.state.players;
    switch(this.state.turn){
      case 1:
        tempPlayers[0].tiles.push(id);
        break;
      case 2:
        tempPlayers[1].tiles.push(id);
        break;
      default:
      return;
    }
    this.setState({
      players: tempPlayers
    });
    this.handleSwapTuns();
  }
  render() {
    let currentState = null;
    let winScreen = null;
    if(this.state.displayWin){
      winScreen = <WinScreen/>;
    }
    if(this.state.displayForm){
      currentState = <PlayerForm setPlayers={this.handlePlayers}/>;
    } else {
      currentState = <ScoreCard 
      player1={this.state.players[0]}
      player2={this.state.players[1]}
      />;
    }
    return (
      <React.Fragment>
      {winScreen}
      {currentState}
      <GameBoard turn={this.state.turn} theClickening={this.handleClickGameCell}/>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {

  }
}
//StateControl = connect(mapStateToProps)(StateControl);
export default StateControl;