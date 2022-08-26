import './App.css';
import React, { Component } from 'react';
import Button from './Button';

class App extends Component {

    constructor(){
      super();
      this.state = {
        colors : ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
      }
    }

  // shuffle = () => {
  //   this.setState(prevState => ({colors:prevState.colors = }))
  // }
  shuffle = () => {
    this.setState({colors: this.state.colors = this.state.colors.sort((a, b) => 0.5 - Math.random())})
    console.log (this.state.colors);
  }

  render(){
    return (
      <div className="container">
        <div className="panel" >
          <div key={this.state.colors}>
            {this.state.colors.map(color => <p key={color} className={this.state.colors[0]}>{color}</p>)}
          </div>
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  };
};

export default App;
