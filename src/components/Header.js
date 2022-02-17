import React from 'react';

function Header(props) {
  const style = {
    fontSize: "4rem",
    textAlign: "center",
    marginTop: ".25em",
    marginBottom: ".25em"
  }

  return (
    <h1 style={style}>Tic Cat Toe</h1>
  );
}

export default Header;