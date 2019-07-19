import React, {useState, useRef, Sound} from 'react';
import Keyboard from './components/Keyboard';


function App () {
  const [keys] = useState([
    {name: 'A', id: 65, audio: './components/sounds/clap.wav'},
    {name: 'S', id: 83, audio: './components/sounds/hihat.wav'}
  ]);

 

  // const music = useRef(null);
  // const [musicSrc, setMusicSrc] = useState('');

  const start = (noise) => {
    console.log(noise);
      
  }

  return (
    <div className={`container`}>
      <h1>Drum Kit in React</h1>
      < Keyboard keys={keys} start={start} />
      <audio></audio>
    </div>
  )
}

export default App;