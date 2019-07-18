import React, {useState} from 'react';
import Keyboard from './components/Keyboard';


function App () {
  const [keys] = useState([
    {name: 'A', id: 65, audio: './components/sounds/clap.wav'},
    {name: 'S', id: 83, audio: './components/sounds/hihat.wav'}
  ]);
  
 

  const play = (noise) => {
    // console.log(noise);
    // if(e.target.keyCode === e.target.id) {
    const audio= new Audio(noise);
    console.log(audio);
    audio.play();
    // }
  }
  return (
    <div className={`container`}>
      <h1>Drum Kit in React</h1>
      < Keyboard keys={keys} play={play} />
    </div>
  )
}

export default App;