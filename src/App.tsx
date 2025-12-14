import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('0');

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        // Replace × with * and ÷ with / for calculation
        const expression = input.replace(/×/g, '*').replace(/÷/g, '/');
        // eslint-disable-next-line no-eval
        const calcResult = eval(expression);
        setResult(Number.isFinite(calcResult) ? calcResult.toString() : 'Error');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('0');
    } else if (value === '⌫') {
      setInput(prev => prev.slice(0, -1));
    } else {
      setInput(prev => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '⌫'
  ];

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`btn ${btn === '=' ? 'equals' : ''} ${['C', '⌫'].includes(btn) ? 'operation' : ''}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
