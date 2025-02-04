import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [backgroundLevel, setBackgroundLevel] = useState(50);

  const increment = () => {
    setCount(prev => prev + 1);
    setBackgroundLevel(prev => Math.min(prev + 10, 100));
  };

  const decrement = () => {
    setCount(prev => Math.max(prev - 1, 0));
    setBackgroundLevel(prev => Math.max(prev - 10, 0));
  };

  const reset = () => {
    setCount(0);
    setBackgroundLevel(50);
  };

  return (
    <div className="counter-container">
      <motion.div 
        className="counter-box"
        style={{ backgroundColor: `hsl(210, 100%, ${backgroundLevel}%)`, padding: '20px', borderRadius: '8px', textAlign: 'center'  }}
        animate={{ scale: 1 + count * 0.05 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="counter-title">Counter</h3>
        <div className="counter-display">
          <h4>{count}</h4>
        </div>
        <div className="counter-actions">
          <button className="btn" onClick={increment}>Increment</button>
          <button className="btn" onClick={decrement}>Decrement</button>
          <button className="btn" onClick={reset}>Reset</button>
        </div>

        <div style={{ marginTop: '20px', height: '10px', backgroundColor: '#ddd', borderRadius: '5px' }}>
          <div style={{ height: '100%',
            width: `${(count / 100) * 100}%`,
            backgroundColor: '#3498db',
            borderRadius: '5px' }}/>
        </div>
        
      </motion.div>
    </div>
  );
};

export default Counter;
