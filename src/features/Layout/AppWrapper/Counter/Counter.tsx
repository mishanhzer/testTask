import { useState, useEffect } from 'react'

import { TypesCounter } from './types'

export const Counter = ({ curr, prev, currentCount, slide, prevSlide }: TypesCounter) => {
  const [count, setCount] = useState(currentCount);

  // console.log(slide)
  // console.log(prevSlide)

  useEffect(() => {
    const step = curr >= prev ? 1 : -1;

    const interval = setInterval(() => {
      setCount(currentCount => {
        // if (Math.abs(currentCount + step) > Math.abs(curr)) {
        if (currentCount + step > curr) {
          clearInterval(interval);
          return curr;
        }
        return currentCount + step;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [curr]);

  return <div>{count}</div>;
}