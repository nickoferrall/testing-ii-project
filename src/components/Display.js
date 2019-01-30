import React from 'react';

const Display = props => {
  console.log('PRops from display', props);
  return (
    <div>
      <div className="strike">Strike</div>
      <div className="ball">{`Ball: ${props.state.ball}`}</div>
      {/* <div className="foul">{`Foul: ${props.state.foul}`}</div> */}
    </div>
  );
};

export default Display;
