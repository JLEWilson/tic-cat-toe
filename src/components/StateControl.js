import React from 'react';
import { connect } from 'react-redux';
import GameBoard from './GameBoard';
import PlayerForm from './PlayerForm';
import ScoreCard from './ScoreCard';
import WinScreen from './WinScreen';
import PropTypes from 'prop-types';
import glassesCatWink from '../img/cat-glasses-wink.png';
import glassesCat from '../img/cat-glasses.png';
import catSideEye from '../img/cat-side-eye.png';
import catEyesClosed from '../img/cat-eyes-closed.png';

class StateControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // ----to player form----
  handlePlayers = (players) => {
    const {dispatch} = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    const action2 = {
      type: 'EDIT_PLAYERS',
      p1: {
        name: players.p1Name,
        id: 1,
        score: 0
      },
      p2: {
        name: players.p2Name,
        id: 2,
        score: 0
      }
    }
    const action3 = {
      type: 'SWITCH_TURN'
    }
    dispatch(action);
    dispatch(action2)
    dispatch(action3);
  }

  // ----handles game cell click----
  handleSwapTurns = () => {
    const {dispatch} = this.props;
    const action = {
      type: 'SWITCH_TURN'
    }
    dispatch(action);
  }
  handleClickGameCell = (id) => {
    const {dispatch} = this.props;
    let tempTiles = this.props.tiles;
    
    const action = {
      type: 'EDIT_TILES',
      id: id,
      currentPlayer: this.props.turn
    }
     /// Change!!
    switch(this.props.turn){
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
    this.handleSwapTurns();
    this.handleWinGame(tempTiles)
  }

  // ----to handle win----
  handleWinGame = (currentTiles) => {
    let gotAWinner = null;
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
    for(let i = 0; i < winningTiles.length; i++) {
      const [a, b, c] = winningTiles[i];
      if(currentTiles[a] != 0 && currentTiles[a] === currentTiles[b] && currentTiles[a] === currentTiles[c]){
        gotAWinner = 'yes'
        const action2 = {
          type: 'PLAYER_WIN',
          p1: this.props.players.player1,
          p2: this.props.players.player2,
          winner: currentTiles[a]
        }
        let winner;
        currentTiles[a] === 1 ?
        winner = this.props.players.player1.name :
        winner = this.props.players.player2.name;
        const action3 = {
          type: "SET_WINNER",
          winner: winner
        }
        dispatch(action);
        dispatch(action2)
        dispatch(action3)
      }
    }
    if (!currentTiles.includes(0) && gotAWinner !== "yes") {
      const action4 = {
        type: "SET_WINNER",
        winner: "CAT SCRATCH"
      }
      dispatch(action);
      dispatch(action4);
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
    display: "flex",
    width: "100%",
    justifyContent: "center",
    columnGap: "3em",
  }

  catImageTopDiv = {
    display: "flex",
    width: "100%"
  }

  topRightCat = {
    marginLeft: "1em"
  }

  topLeftCat = {
    marginLeft: "auto",
    marginRight: "2em"
  }

  catImageBottomDiv = {
    display: "flex",
    width: "100%"
  }

  bottomRightCat = {
    marginLeft: "1em"
  }

  bottomLeftCat = {
    marginLeft: "auto",
    marginRight: "2em"
  }

  render() {
    let currentState = null;
    let winScreen = null;
    if(this.props.displayWin){
      winScreen = <WinScreen winner={this.props.winner} reset={this.handleReset}/>;
    }
    if(this.props.displayForm){
      currentState = <PlayerForm setPlayers={this.handlePlayers}/>;
    } else {
      currentState = <ScoreCard 
      player1={this.props.players.player1}
      player2={this.props.players.player2}
      />;
    }
    return (
      <React.Fragment>
      {winScreen}
      <div style={this.catImageTopDiv}>
      <img style={this.topRightCat}src={glassesCatWink} />
      <img style={this.topLeftCat} src={catEyesClosed} />
      </div>
      <div style={this.gameStyles}>
      {currentState}
      <GameBoard tiles={this.props.tiles} theClickening={this.handleClickGameCell}/>
      </div>
      <div style={this.catImageBottomDiv}>
      <img style={this.bottomRightCat} src={catSideEye} />
      <img style={this.bottomLeftCat} src={glassesCat} />
      </div>
      </React.Fragment>
    );
  }
}

StateControl.propTypes = {
  tiles: PropTypes.array,
  displayForm: PropTypes.bool,
  displayWin: PropTypes.bool,
  players: PropTypes.object,
  turn: PropTypes.number,
  winner: PropTypes.string
}

const mapStateToProps = state => {
  return {
    tiles: state.tiles,
    displayForm: state.displayForm,
    displayWin: state.displayWin,
    players: state.players,
    turn: state.turn,
    winner: state.winner
  }
}

StateControl = connect(mapStateToProps)(StateControl);

export default StateControl;