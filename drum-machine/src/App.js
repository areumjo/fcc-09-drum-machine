import React, { useState } from 'react';
import './App.css';
import Drumboard from './components/Drumboard';
import sound from './components/sound';

function App() {
  // console.log(sound)
  const [drumSound, setDrumSound] = useState(sound)

  return (
    <div className="App" id="drum-machine">
      <Drumboard drumSound={drumSound} />
    </div>
  );
}

export default App;
