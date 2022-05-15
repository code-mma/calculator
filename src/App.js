import React, {useState} from 'react';
import './App.css';
import {evaluate} from 'mathjs';

function Display (props) {
  return (
    <div className="card-body border border-dark">
      <h1>{props.value}</h1>
      <p>{props.expressionDisplay}</p>
    </div>
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
  const [ expression, setExpression ] = useState([]);
  const [ display, setDisplay ] = useState('');
  const [ computed, isComputed ] = useState(false);

  function modifySymbol(i) {
    if (i == 'x') {
      return '*';
    }
    else if (i == '÷') {
      return '/';
    }
    else return i;
  }

  function handleClick(i) {
    if (typeof(i) === 'number') {
      if (computed == false) {
        setDisplay(display + i);
      }
    }
    else if (i === '=') {
      if (computed == false) {
        expression.push(display);
        setDisplay(evaluate(expression.join('')));
        isComputed(true);
      }
    }
    else if (i === 'C') {
      setDisplay('');
      setExpression([]);
      isComputed(false);
    }
    else {
      if (computed == true) {
        setExpression([display, modifySymbol(i)]);
        isComputed(false);
        setDisplay('');
      }
      else if (display !== '' && computed == false) {
        setExpression([...expression, display, modifySymbol(i)])
        setDisplay('');
      }
    }  
    console.log(expression);
  }
  

  function renderSquare(i) {
    return <Square value={i} onClick={() => handleClick(i)}/>;
  }

  function renderDisplay() {
    return <Display value={display} expressionDisplay={expression.join('')}/>;
  }
  
  return (
    <div className="wrapper border border-dark bg-light">
      <div className="card">
        {renderDisplay()}
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