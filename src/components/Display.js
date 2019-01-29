import React from 'react';

const Display = props => {
  console.log('PRops from display', props);
  return (
    <div>
      <div className="strike">Strike</div>
      <div>{`Ball: ${props.state.ball}`}</div>
      <div>{`Foul: ${props.state.foul}`}</div>
    </div>
  );
};

export default Display;
