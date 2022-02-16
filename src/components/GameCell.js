import React from 'react';
import BlackCat from '../img/cat-black.png';
import WhiteCat from '../img/cat-white.png';

class GameCell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentImg: 0
    }
  }

  style = {
    border: ".2em solid black",
    width: "10em",
    height: "10em",
    boxSizing: "border-box"
  }

  clickFunc = () => {
    const clickable = this.state.currentImg === 0;
    if(clickable){
      this.props.theClickening(this.props.id);
      switch(this.props.turn){
        case 1:
          this.setState({currentImg: 1})
          break;
        case 2:
          this.setState({currentImg: 2})
          break;
        default:
        return
      }
    }
  }

  render() {
    let currentImg = null;
    switch(this.state.currentImg){
      case 1:
        currentImg = <img src={WhiteCat}/>;
        break;
      case 2:
        currentImg = <img src={BlackCat}/>;
        break;
      default:
        break;
    }
    return (
      <div onClick={this.clickFunc} style={this.style}>
        {currentImg}
      </div>
    );
  }
}

export default GameCell;