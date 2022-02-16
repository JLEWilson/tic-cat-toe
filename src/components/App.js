import React from 'react';
import Header from './Header';
import StateControl from './StateControl';

function App(props) {
  return (
    <React.Fragment>
      <Header/>
      <StateControl/>
    </React.Fragment>
  );
}

export default App;