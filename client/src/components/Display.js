import React from 'react';

const Display = props => {
  console.log('PRops from display', props);
  return (
    <div>
      <div>{`Strike: ${props.state.strike}`}</div>
      <div>{`Ball: ${props.state.ball}`}</div>
      <div>{`Foul: ${props.state.foul}`}</div>
    </div>
  );
};

export default Display;
