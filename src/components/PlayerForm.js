import React from 'react';

function PlayerForm(props) {
  
  function newPlayerFormSubmission(event){
    event.preventDefault();
    props.setPlayers({
      p1Name: event.target.p1Name.value,
      p2Name: event.target.p2Name.value
    })
  }

  const inputStyles = {
    display: "block",
    fontSize: "2rem",
    marginBottom: "1em",
    borderRadius: ".25em"
  }

  return (
    <div>
      <form onSubmit={newPlayerFormSubmission}>
        <input
        style={inputStyles}
        type="text"
        name='p1Name'
        maxLength="16"
        placeholder='Player 1 Name'/>
        <input
        style={inputStyles} 
        type="text"
        name='p2Name'
        maxLength="16"
        placeholder='Player 2 Name'/>
        <button id="btn" type='submit'>Start Game</button>
      </form>
    </div>
  );
}

export default PlayerForm;