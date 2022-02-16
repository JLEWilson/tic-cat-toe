import React from 'react';

function WinScreen(props) {
  function handleClick() {
    props.reset();
  }

  return (
    <div>
      <h1>{props.winner} is the winner!!!!</h1>
      <button onClick={handleClick}>play again?</button>
    </div>
  );
}

export default WinScreen;