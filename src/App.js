import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('0');

  const calculateResult = (value) => {
    let result;

    try
    {
      const operators = ['+', '-', '/', '*', '%'];
      let operator = null;

      for(let i = 0; i < input.length; i++)
      {
        if(operators.includes(input[i]))
        {
          operator = input[i];
          break;
        }
      }

      if(!operator)
      {
        setInput(parseFloat(input).toString());
        return;
      }

      const [operand1, operand2] = input.split(operator).map(parseFloat);
      
      switch(operator)
      {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        case '%':
          result = operand1 % operand2;
          break;
        default:
          throw new Error('Invalid operator');
      }
      setInput(result.toString());
    }
    catch(error)
    {
      setInput('Error');
    }
  }

  const handleClick = (value) => {
    if(value === 'C'){
      setInput('');
    }
    else if(value === '<')
    {
      setInput(input.slice(0, -1));
    }
    else if(value === '=')
    {
      calculateResult(input);
    }
    else
    {
      setInput((prev) => prev + value);
    }
  }

  return (
    <div className="flex justify-center h-screen w-full items-center">
      <div className="flex flex-col border-[8px] border-black rounded-2xl p-3 bg-slate-500">
        <h1 className="text-3xl bg-neutral-400 h-16 mb-1 rounded-xl p-4 mt-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-60">{input}</h1>
        <div className="flex flex-row justify-around items-center gap-1 mt-1 mb-1">
          <button className = "btn" onClick={() => handleClick('C')}>C</button>
          <button className = "btn" onClick={() => handleClick('<')}>&lt;</button>
          <button className = "btn" onClick={() => handleClick('%')}>%</button>
          <button className = "btn" onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="flex flex-row justify-around items-center gap-1 mt-1 mb-1">
          <button className = "btn" onClick={() => handleClick('7')}>7</button>
          <button className = "btn" onClick={() => handleClick('8')}>8</button>
          <button className = "btn" onClick={() => handleClick('9')}>9</button>
          <button className = "btn" onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="flex flex-row justify-around items-center gap-1 mt-1 mb-1">
          <button className = "btn" onClick={() => handleClick('4')}>4</button>
          <button className = "btn" onClick={() => handleClick('5')}>5</button>
          <button className = "btn" onClick={() => handleClick('6')}>6</button>
          <button className = "btn" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="flex flex-row justify-around items-center gap-1 mt-1 mb-1">
          <button className = "btn" onClick={() => handleClick('1')}>1</button>
          <button className = "btn" onClick={() => handleClick('2')}>2</button>
          <button className = "btn" onClick={() => handleClick('3')}>3</button>
          <button className = "btn" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="flex flex-row justify-around items-center gap-1 mt-1 mb-1">
          <button className = "btn" onClick={() => handleClick('0')}>0</button>
          <button className = "btn" onClick={() => handleClick('00')}>00</button>
          <button className = "btn" onClick={() => handleClick('.')}>.</button>
          <button className = "btn" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
