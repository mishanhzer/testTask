import { useState, useEffect } from 'react'

import { TypesCounter } from './types'

export const Counter = ({ curr, prev, currentCount }: TypesCounter) => {
  const [count, setCount] = useState(currentCount);

  useEffect(() => {
    const step = curr >= prev ? 1 : -1;

    const interval = setInterval(() => {
      setCount(currentCount => {
        if (Math.abs(currentCount + step) > Math.abs(curr)) {
          clearInterval(interval);
          return curr;
        }
        return currentCount + step;
      });
    }, 75);

    return () => clearInterval(interval);
  }, [curr]);

  return <div>{count}</div>;
}