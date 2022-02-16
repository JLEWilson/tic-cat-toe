import React from 'react';

function ScoreCard(props) {
  return (
    <div>
      <div>
        <h3>{props.player1.name}</h3>
        <h3>Score: {props.player1.score}</h3>
      </div>
      <div>
        <h3>{props.player2.name}</h3>
        <h3>Score: {props.player2.score}</h3>
      </div>
    </div>
  );
}

export default ScoreCard;