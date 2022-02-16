import React from 'react';
import BlackCat from '../img/cat-black.png';
import WhiteCat from '../img/cat-white.png';

function GameCell(props){

  const style = {
    border: ".2em solid black",
    width: "10em",
    height: "10em",
    boxSizing: "border-box"
  }

  function clickFunc(){
    if(props.tiles[props.id] === 0) {
    props.theClickening(props.id);
    }
  }

  let currentImage = null

  if(props.tiles[props.id] === 1) {
    currentImage = WhiteCat
  } else if (props.tiles[props.id] === 2) {
    currentImage = BlackCat
  }

  return (
    <div onClick={clickFunc} style={style}>
      <img src={currentImage} />
    </div>
  );
}

export default GameCell;