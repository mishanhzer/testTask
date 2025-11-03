import { useEffect, useRef, useState } from 'react'

import { gsap } from "gsap";

import { TypesCounter } from './types'

export const Counter = ({ startNumber = 1987, endNumber = 1991, duration = 1.5 }: TypesCounter) => {
  const numberRef = useRef(null);
  const animatedValue = useRef({ value: startNumber });
  const [displayNumber, setDisplayNumber] = useState(startNumber);

  useEffect(() => {
    animatedValue.current.value = startNumber;
    gsap.to(animatedValue.current, {
      value: endNumber,
      duration: duration,
      ease: 'power4.out',
      onUpdate: () => {
        setDisplayNumber(Math.round(animatedValue.current.value));
      },
    });

    return () => {
      gsap.killTweensOf(animatedValue.current);
    };

  }, [startNumber, endNumber, duration]);

  return (
    <span ref={numberRef}>{Math.round(displayNumber)}</span>
  );
};