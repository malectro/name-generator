import React from 'react';
import logo from './logo.svg';
import './App.css';

const terms = [
  ['apple', 'pie', 'time'],
  ['puppy', 'tree'],
  ['dude', 'land', 'fire'],
];

const urlHash = window.location.hash;
const defaultHash = urlHash && JSON.parse(atob(urlHash.slice(1)));

function App() {
  const [hash, setHash] = React.useState(defaultHash);

  const handleClick = () => {
    const hash = terms.map(set => Math.floor(Math.random() * set.length));
    setHash(hash);
    window.history.replaceState(
      {},
      '',
      '#' + btoa(JSON.stringify(hash)).slice(0, -2),
    );
  };

  return (
    <div className="App">
      <>
        <h1>80s Exploitation Film Title Generator</h1>
        <h2>
          {hash &&
            hash
              .map((part, index) => terms[index][part % terms.length])
              .join(' ')}
        </h2>
        <button onClick={handleClick}>Generate</button>
      </>
    </div>
  );
}

export default App;
