import React from 'react';
import Keys from './Keys';

function Keyboard (props) {

  return (
    <div className={`keyboard`}>
      {props.keys.map(element => (
        <Keys key={element.id} id={element.id} name={element.name} audio={element.audio} play={props.play} />
      ))}
    </div>
  )

}

export default Keyboard;