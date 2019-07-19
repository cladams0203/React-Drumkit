import React from 'react';

function Keys(props) {
  // console.log(props.play)
  
  return (
    <div className={`keys`} onClick={(event) => {
      event.preventDefault();
      props.start(props.audio);
    } }>
      <div>{props.name}</div>
    </div>
  )
  
}

export default Keys;