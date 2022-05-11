import React, {useState} from 'react';
import './App.css';
import {evaluate} from 'mathjs';

function Display (props) {
  return (
    <h1>{props.value}</h1>
  );  
};

function Square (props) {

  let checkButtonType = () => {
    if (props.value == 'C') {
      return 'danger';
    }
    else if (props.value == '=') {
      return 'success';
    }
    else if (typeof(props.value) == 'number') {
      return 'primary';
    }
    else return 'warning';
  };

  return (
    <button 
      type="button"
      className={'square btn btn-' + checkButtonType() + ' ' + props.value} 
      onClick={() => props.onClick()}>
        {props.value}
    </button>
  );  
};

function Main () {
  const [ digits, setDigits ] = useState([]);
  const [ display, setDisplay ] = useState('');

  function signModifier(i) {
    if (i == 'x') {
      i = '*';
    }
    else if (i == '÷') {
      i = '/';
    }
  }

  function handleClick(i) {
    if (typeof(i) === 'number') {
      setDisplay(display + i);
    }
    else if (i === '=') {
      digits.push(display)
      setDisplay(evaluate(digits));
    }
    else if (i === 'C') {
      setDisplay('');
      setDigits([]);
    }
    else {
      setDigits([...digits, display, i])
      setDisplay('');
    }  
  }

  function renderSquare(i) {
    return <Square value={i} onClick={() => handleClick(i)}/>;
  }

  function renderDisplay() {
    return <Display value={display} />;
  }
  
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-body">
          {renderDisplay()}
        </div>
      </div>
      <div className="button-container">
        <div className="row">
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare('+')}
        </div>
        <div className="row">
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare('-')}
        </div>
        <div className="row">
          {renderSquare(7)}
          {renderSquare(8)}
          {renderSquare(9)}
          {renderSquare('x')}
        </div>
        <div className="row">
          {renderSquare('C')}
          {renderSquare(0)}
          {renderSquare('=')}
          {renderSquare('÷')}
        </div>
      </div>
    </div>
  );  
};

export default Main;