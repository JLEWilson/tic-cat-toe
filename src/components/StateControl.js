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
      tiles: [0,0,0,0,0,0,0,0,0],
      displayForm: true,
      displayWin: false,
      winner: null,
      turn: 0 // 0 = noone, 1 = p1, 2 = p2
    };
  }

  // ----to player form----
  handlePlayers = (players) => {
    const player1 =  {
      name: players.p1Name,
      id: 1,
      score: 0
    };
    const player2 = {
      name: players.p2Name,
      id: 2,
      score: 0
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

  // ----handles game cell click----
  handleSwapTurns = () => {
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
    let tempTiles = this.state.tiles;
    switch(this.state.turn){
      case 1:
        tempTiles[id] = 1
        break;
      case 2:
        tempTiles[id] = 2
        break;
      default:
      return;
    }
    this.setState({
      players: tempPlayers,
      reset: false,
      tiles: tempTiles
    });
    this.handleSwapTurns();
    this.handleWinGame(tempTiles)
  }

  // ----to handle win----
  handleWinGame = (currentTiles) => {
    const winningTiles = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i = 0; i < winningTiles.length; i++) {
      const [a, b, c] = winningTiles[i];
      if(currentTiles[a] != 0 && currentTiles[a] === currentTiles[b] && currentTiles[a] === currentTiles[c]){
        const winningPlayer = this.state.players[this.state.turn -1];
        const losingPlayer = this.state.players.filter(p => p.id !== this.state.turn)[0];
        winningPlayer.score += 1
        let newPlayers = [];
        winningPlayer.id === 1 ?
          newPlayers = [winningPlayer, losingPlayer] :
          newPlayers = [losingPlayer, winningPlayer]
        this.setState({winner: winningPlayer.name, displayWin: true, players: newPlayers});
      }
    }
  }

  handleReset = () => {
    this.setState({displayWin: false, tiles: [0,0,0,0,0,0,0,0,0]});
  }

  render() {
    let currentState = null;
    let winScreen = null;
    if(this.state.displayWin){
      winScreen = <WinScreen winner={this.state.winner} reset={this.handleReset}/>;
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
      <GameBoard tiles={this.state.tiles} theClickening={this.handleClickGameCell}/>
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