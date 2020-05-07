import React, { useState } from 'react';
import './App.css';
import Drumboard from './components/Drumboard';
import Drumpad from './components/Drumpad';
import sound from './components/sound';
import Footer from './components/Footer';
const drumSoundSet = sound;

function App() {
  // console.log(sound)
  const [plyaingSound, setPlayingSound] = useState('');

  return (
    <div className="App" id="drum-machine">
      <h2><span role="img" aria-label="music">🎵</span>Play your drum<span role="img" aria-label="music">🎶</span></h2>
      <p>Use your keyboard or just click!</p>
      <div className="outer-drum-pad">
        {drumSoundSet.map((e,index) => {
          return (
            <Drumpad 
              key={index}
              keyCode={e.keyCode}
              keyTrigger={e.keyTrigger}
              plyaingSound={plyaingSound}
              setPlayingSound={setPlayingSound}
              clip={e.url}
              clipId={e.id}
          />       
          )        
      })}
      </div>
      <Drumboard plyaingSound={plyaingSound} />
      <Footer />
    </div>
  );
}

export default App;
