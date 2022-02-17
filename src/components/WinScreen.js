import React from 'react';

function WinScreen(props) {
  function handleClick() {
    props.reset();
  }

  const styles = {
    position: "absolute",
    height: "40em",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.8)",
    paddingTop: "1em"
  }

  const h1Styles = {
    fontSize: "2rem",
    color: "rgb(255, 213, 220)",
    textAlign: "center"
  }

  return (
    <div style={styles}>
      
      <h1 style={h1Styles}>{props.winner === 'Cat Scratch' ? 'Cat Scratch' : `${props.winner} is the winner!!!`}</h1>
      <button id="btn" onClick={handleClick}>play again?</button>
    </div>
  );
}

export default WinScreen;