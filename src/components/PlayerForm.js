import React from 'react';

function PlayerForm(props) {
  
  function newPlayerFormSubmission(event){
    event.preventDefault();
    props.setPlayers({
      p1Name: event.target.p1Name.value,
      p2Name: event.target.p2Name.value
    })
  }
  return (
    <React.Fragment>
      <form onSubmit={newPlayerFormSubmission}>
        <input type="text"
        name='p1Name'
        maxLength="16"
        placeholder='Player 1 Name'/>
        <input type="text"
        name='p2Name'
        maxLength="16"
        placeholder='Player 2 Name'/>
        <button type='submit'>Submit Players</button>
      </form>
    </React.Fragment>
  );
}

export default PlayerForm;