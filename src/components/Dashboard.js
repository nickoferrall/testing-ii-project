import React from 'react';

const Dashboard = props => {
  console.log('props =', props);
  return (
    <div>
      <form>
        <button name="strike" value="strike" onClick={props.update}>
          Strike
        </button>
        <button name="ball" value="ball" onClick={props.update}>
          Ball
        </button>
        <button name="foul" value="Foul" onClick={props.update}>
          Foul
        </button>
        <button name="hit" value="Hit" onClick={props.update}>
          Hit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
