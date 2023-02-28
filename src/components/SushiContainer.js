import React from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({ sushis, handleMoreClick, handleEatSushi }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi}/>
      ))}
      <MoreButton handleMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;