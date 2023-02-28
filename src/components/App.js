import React, { useEffect, useState } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

const API = 'http://localhost:3001/sushis';

function App() {
  const [sushis, setSushis] = useState([]);
  const [beltPosition, setBeltPosition] = useState(0);
  const [money, setMoney] = useState(100);
  const DISPLAY_COUNT = 4;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => setSushis(json));
  }, []);

  function setEaten(piece) {
    const remainingMoney = money - piece.price;

    if (!piece.eaten && remainingMoney >= 0) {
      setMoney(remainingMoney);

      setSushis(
        sushis.map((sushi) =>
          sushi.id === piece.id ? { ...sushi, eaten: true } : sushi
        )
      );
    }
  }

  function advanceBelt() {
    setBeltPosition((beltPosition + DISPLAY_COUNT) % sushis.length);
  }

  const eatenSushi = sushis.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis.slice(beltPosition, beltPosition + DISPLAY_COUNT)}
        handleMoreClick={advanceBelt}
        handleEatSushi={setEaten}
      />
      <Table money={money} plates={eatenSushi} />
    </div>
  );
}

export default App;