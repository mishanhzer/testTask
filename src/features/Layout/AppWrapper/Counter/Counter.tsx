import { useEffect, useRef } from 'react'

import { gsap } from "gsap";

import { TypesCounter } from './types'

export const Counter = ({ startNumber = 1987, endNumber = 1991, duration = 1.5 }: TypesCounter) => {
  const numberRef = useRef(null);
  const animatedValue = useRef({ value: startNumber });

  useEffect(() => {
    gsap.to(animatedValue.current, {
      value: endNumber,
      duration: duration,
      ease: 'power4.out',
      onUpdate: () => {
        numberRef.current.textContent = Math.round(animatedValue.current.value);
      },
    });

  }, [endNumber, duration]);

  return (
    <span ref={numberRef}>{Math.round(startNumber)}</span>
  );
};