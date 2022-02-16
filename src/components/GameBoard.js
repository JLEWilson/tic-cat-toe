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
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={0}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={1}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={2}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={3}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={4}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={5}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={6}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={7}/>
      <GameCell tiles={props.tiles} theClickening={props.theClickening} id={8}/>
    </div>
  );
}

export default GameBoard;