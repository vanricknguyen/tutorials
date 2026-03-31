import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col bg-gray-900 p-6 shadow-lg w-80 rounded-2xl">
        <h2 className="text-center text-white text-2xl mb-4">Calculator</h2>
        <div className="mb-2">
          <input
            className="w-full p-2 rounded-2xl bg-white"
            type="string"
            value={numberOne}
            onChange={(e) => setNumberOne(Number(e.target.value))}
          ></input>
        </div>
        <div className="mb-2">
          <input
            className="w-full p-2 rounded-2xl bg-white"
            type="string"
            value={numberTwo}
            onChange={(e) => setNumberTwo(Number(e.target.value))}
          ></input>
        </div>
        <div className="flex justify-center gap-4 mb-2">
          <button
            className="px-6 py-3 bg-blue-500 rounded-2xl hover:bg-blue-600"
            onClick={() => setResult(calFuncs.add(numberOne, numberTwo))}
          >
            +
          </button>
          <button
            className="px-6 py-3 bg-blue-500 rounded-2xl hover:bg-blue-600"
            onClick={() => setResult(calFuncs.subtract(numberOne, numberTwo))}
          >
            -
          </button>
          <button
            className="px-6 py-3 bg-blue-500 rounded-2xl hover:bg-blue-600"
            onClick={() => setResult(calFuncs.multiply(numberOne, numberTwo))}
          >
            x
          </button>
          <button
            className="px-6 py-3 bg-blue-500 rounded-2xl hover:bg-blue-600"
            onClick={() => setResult(calFuncs.divide(numberOne, numberTwo))}
          >
            /
          </button>
        </div>
        <div className="flex flex-col justify-center items-start bg-blue-500 rounded-2xl p-2">
          <p className="text-white">Result</p>
          <p className="text-xl text-white font-bold">{result}</p>
        </div>
      </div>
    </div>
  );
}

export const calFuncs = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
};

export default App;
