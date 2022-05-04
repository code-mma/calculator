import React from 'react';
import './App.css';

class Display extends React.Component {

  render() {
    return (
      <h1>Yow</h1>
    );
  };
};

class Square extends React.Component {
  state = {
    value: this.props.value,
    expression: []
  }

  handleClick = () => {
    this.state.expression.push(this.state.value);
  }

  render() {
    return (
      <button className={'square ' + this.state.value} onClick={this.handleClick}>
        {this.state.value}
      </button>
    );
  };
};

class Main extends React.Component {

  
  renderSquare(i) {
    return <Square value={i} />;
  }

  renderDisplay(i) {
    return <Display />;
  }

  render() {
    return (
      <div>
        <div className="display-container">
          {this.renderDisplay()}
        </div>
        <div className="button-container">
          <div className="row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare('+')}
          </div>
          <div className="row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare('-')}
          </div>
          <div className="row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare('x')}
          </div>
          <div className="row">
            {this.renderSquare('Clear')}
            {this.renderSquare(0)}
            {this.renderSquare('=')}
            {this.renderSquare('÷')}
          </div>
        </div>
      </div>
    );
  };
};

export default Main;
