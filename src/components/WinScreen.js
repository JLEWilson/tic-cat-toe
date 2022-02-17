import React from 'react';
import catGif from '../img/carrier-cat.gif';
import catScratchGif from '../img/cat-scratch.gif';

function WinScreen(props) {
  function handleClick() {
    props.reset();
  }

  const styles = {
    position: "absolute",
    height: "50em",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.8)",
    paddingTop: "1em"
  }

  const h1Styles = {
    fontSize: "2rem",
    color: "rgb(255, 213, 220)",
    textAlign: "center"
  }

  const gifStyle = {
    maxHeight: "25em",
    margin: "0 auto",
    display: "block",
    marginBottom: "1em"
  }

  return (
    <div style={styles}>
      <h1 style={h1Styles}>{props.winner === 'Cat Scratch' ? 'Cat Scratch' : `${props.winner} is the winner!!!`}</h1>
      <img style={gifStyle} src={props.winner=== 'Cat Scratch' ? catScratchGif :catGif} />
      <button id="btn" onClick={handleClick}>play again?</button>
    </div>
  );
}

export default WinScreen;