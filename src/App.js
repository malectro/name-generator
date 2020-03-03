import React from 'react';
import logo from './logo.svg';
import './App.css';

const terms = [
  ['apple', 'pie', 'time'],
  ['puppy', 'tree'],
  ['dude', 'land', 'fire'],
];

function App() {
  const [hash, setHash] = React.useState();

  return (
    <div className="App">
      { hash ?
        <>
          <h2>{hash.map((part, index) => terms[index][part % terms.length]).join(' ')}</h2>
        </>
      :
        <>
      <h1>80s Exploitation Film Title Generator</h1>
          <button onClick={() => setHash(terms.map(set => Math.floor(Math.random() * set.length)))}>Generate</button>
        </>
      }
    </div>
  );
}

export default App;
