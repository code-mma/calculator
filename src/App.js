import React from 'react';
import './App.css';

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  };
};

class Main extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    return (
      <div>
        <div className="display-container">
          
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
