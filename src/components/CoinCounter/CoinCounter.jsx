import React, { useState } from 'react';
import './CoinCounter.css';

const CoinCounter = () => {
  const [coins, setCoins] = useState(0);

  const increaseCoins = (amount) => {
    setCoins(coins + amount);
  };

  return (
    <div className="coin">
      <div className="coin-icon"></div>
      <span id="coin-counter">{coins}</span>
    </div>
  );
};

export default CoinCounter;
