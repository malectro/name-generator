import React from 'react';
import logo from './logo.svg';
import './App.css';

const terms = [
  [
    'Miami',
    'Tijuana',
    'Malibu',
    'California',
    'Sky Resort',
    'Sorority',
    'Party',
    'Bacchanal',
    'Maui',
    'Ibiza',
    'Bangkok',
    'Vegas',
    'Private School',
    'Hollywood',
    'Summer Camp',
    'Beach',
    'Dormitory',
    'Rock Festival',
  ],
  [
    'Switchblade',
    'Orgy',
    'Booty',
    'Underwear',
    'Meat Grinder',
    'Handgun',
    'Skin Flick',
    'Brassiere',
    'Dental Drill',
    'Lambada',
    'Lipstick',
    'Thong',
    'Roller Derby',
    'Tequila',
    'Banana Hammock',
    'Hot Pants',
    'High Hell',
  ],
  [
    'Nurses',
    'Flight Attendants',
    'Librarians',
    'Policewomen',
    'Models',
    'Tutors',
    'Coeds',
    'Strippers',
    'Lesbian Critical Theory Professors',
    'Mommies',
    "Buxom Santa's Elves",
    'Nuns',
    'Masseuses',
    'Prison Guards',
    'Maids',
    'Cheerleaders',
    'Cat Bruglars',
    'Cavewomen',
  ],
];

const urlHash = window.location.hash;
const defaultHash = urlHash && JSON.parse(atob(urlHash.slice(1)));

function App() {
  const [hash, setHash] = React.useState(defaultHash);

  const handleClick = () => {
    const hash = terms.map(set => Math.floor(Math.random() * set.length));
    console.log('hio', hash);
    setHash(hash);
    window.history.replaceState(
      {},
      '',
      '#' + btoa(JSON.stringify(hash)),
    );
  };

  return (
    <div className="App">
      <>
        <h1>80s Exploitation Film Title Generator</h1>
        <h2>
          {hash &&
            hash
              .map((part, index) => terms[index][part % terms[index].length])
              .join(' ')}
        </h2>
        <button onClick={handleClick}>Generate</button>
      </>
    </div>
  );
}

export default App;
