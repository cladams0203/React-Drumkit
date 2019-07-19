import React from 'react';
import Keys from './Keys';

function Keyboard (props) {

  return (
    <div className={`keyboard`}>
      {props.keys.map(element => (
        <Keys key={element.id} id={element.id} name={element.name} audio={element.audio} start={props.start} />
      ))}
    </div>
  )

}

export default Keyboard;