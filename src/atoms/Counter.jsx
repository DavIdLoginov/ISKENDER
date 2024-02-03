import React, { useState } from 'react';
import './style.css';

const Counter = ({ initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
