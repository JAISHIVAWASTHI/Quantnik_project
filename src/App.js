import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        // Replace × with * and ÷ with / for evaluation
        const expression = input.replace(/×/g, '*').replace(/÷/g, '/');
        setResult(eval(expression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(prev => prev + value);
    }
  };

  // Handle keyboard input
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (/[0-9+\-*/.=]/.test(key)) {
        e.preventDefault();
        handleClick(key);
      } else if (key === 'Enter') {
        e.preventDefault();
        handleClick('=');
      } else if (key === 'Escape') {
        e.preventDefault();
        handleClick('C');
      } else if (key === '/') {
        e.preventDefault();
        handleClick('÷');
      } else if (key === '*') {
        e.preventDefault();
        handleClick('×');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="app">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`btn ${btn === '=' ? 'equals' : ''} ${btn === 'C' ? 'clear' : ''}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
