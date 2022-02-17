import React from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import PlayerForm from './PlayerForm';
import ScoreCard from './ScoreCard';
import WinScreen from './WinScreen';
import PropTypes from 'prop-types';

class StateControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      winner: null,
      turn: 0 // 0 = noone, 1 = p1, 2 = p2
    };
  }

  // ----to player form----
  handlePlayers = (players) => {
    const {dispatch} = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
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

    dispatch(action);
    
    this.setState({
      players: [
        player1,
        player2
      ],
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
    const {dispatch} = this.props;

    let tempPlayers = this.state.players;
    let tempTiles = this.props.tiles;
    
    const action = {
      type: 'EDIT_TILES',
      id: id,
      currentPlayer: this.state.turn
    }
     /// Change!!
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
    dispatch(action);
    this.setState({
      players: tempPlayers,
      reset: false
    });
    this.handleSwapTurns();
    this.handleWinGame(tempTiles)
  }

  // ----to handle win----
  handleWinGame = (currentTiles) => {
    const {dispatch} = this.props;
    const action = {
      type: 'TOGGLE_WIN'
    }
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
    if(!currentTiles.includes(0)) {
      dispatch(action);
      this.setState({winner: "Cat Scratch"});
    }
    for(let i = 0; i < winningTiles.length; i++) {
      const [a, b, c] = winningTiles[i];
      if(currentTiles[a] != 0 && currentTiles[a] === currentTiles[b] && currentTiles[a] === currentTiles[c]){
        const winningPlayer = this.state.players[this.state.turn -1];
        const losingPlayer = this.state.players.filter(p => p.id !== this.state.turn)[0];
        winningPlayer.score += 1
        let newPlayers = [];
        winningPlayer.id === 1 ?
          newPlayers = [winningPlayer, losingPlayer] :
          newPlayers = [losingPlayer, winningPlayer];
          dispatch(action);
        this.setState({winner: winningPlayer.name, players: newPlayers});
      }
    }
  }

  handleReset = () => {
    const {dispatch} = this.props;
    const action = {
      type: 'RESET-TILES', 
      id: null, 
      currentPlayer: null
    }
    const action2 = {
      type: 'TOGGLE_WIN'
    }
    dispatch(action);
    dispatch(action2);
  }

  // ----Styles----
  gameStyles = {
    marginTop: "3em",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    columnGap: "3em",
  }

  render() {
    let currentState = null;
    let winScreen = null;
    if(this.props.displayWin){
      winScreen = <WinScreen winner={this.state.winner} reset={this.handleReset}/>;
    }
    if(this.props.displayForm){
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
      <div style={this.gameStyles}>
      {currentState}
      <GameBoard tiles={this.props.tiles} theClickening={this.handleClickGameCell}/>
      </div>
      </React.Fragment>
    );
  }
}

StateControl.propTypes = {
  tiles: PropTypes.array,
  displayForm: PropTypes.bool,
  displayWin: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    tiles: state.tiles,
    displayForm: state.displayForm,
    displayWin: state.displayWin
  }
}

StateControl = connect(mapStateToProps)(StateControl);

export default StateControl;