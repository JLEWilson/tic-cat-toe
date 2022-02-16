import React from 'react';
import GameCell from './GameCell';

function GameBoard(props) {
  const gameBoardStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 10em)",
    gridTemplateRows: "repeat(3, 1fr)",
    justifyContent: "center"
  }
  return (
    <div style={gameBoardStyles}>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={0}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={1}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={2}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={3}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={4}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={5}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={6}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={7}/>
      <GameCell turn={props.turn} theClickening={props.theClickening} id={8}/>
    </div>
  );
}

export default GameBoard;