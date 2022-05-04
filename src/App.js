import React, { useState } from 'react';
import './App.css';

class Display extends React.Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    );
  };
};

class Square extends React.Component {
  render() {
    return (
      <button 
        className={'square ' + this.props.value} 
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  };
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
      displayValue: null,
    };
  }

  handleClick(i) {
    this.setState( { displayValue: i });
  }

  renderSquare(i) {
    return <Square value={i} onClick={() => this.handleClick(i)}/>;
  }

  renderDisplay() {
    return <Display value={this.state.displayValue} />;
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
            {this.renderSquare('C')}
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
