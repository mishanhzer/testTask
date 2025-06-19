import React, { useState, useEffect, useRef } from "react";
import { useStore } from "../../../../store/store";
import styles from '../categories/ShopAnimals/styles/shopAnimals.module.scss'

interface TypesSavePanel {
  activeDiscount: boolean
  setActiveDiscount: React.Dispatch<React.SetStateAction<boolean>>
}

export const SubscribePanel = ({ activeDiscount, setActiveDiscount }: TypesSavePanel) => {
  const setDiscount = useStore(state => state.setDiscount)

  const [number, setNumber] = useState(0)

  const checkboxRef = useRef<HTMLInputElement>(null);

  const [isChecked, setIsChecked] = useState(() => {
    const storedValue = localStorage.getItem('isChecked');
    console.log(storedValue) // true or false
    return storedValue === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isChecked', isChecked.toString());
  }, [isChecked]);

  const handleViewDiscount = () => {
    isChecked ? setActiveDiscount(false) : setActiveDiscount(true)
    isChecked ? setDiscount(true) : setDiscount(false)
  }

  const handleToggle = () => {
    const storedDiscount = localStorage.getItem('discount');
    let num = storedDiscount ? parseInt(storedDiscount) : 0;

    const interval = setInterval(() => {
      if (isChecked) {
        num--
        if (num <= 0) {
          clearInterval(interval)
        }
      } else {
        num++
        if (num >= 20) {
          clearInterval(interval)
        }
      }
      setNumber(num)
      localStorage.setItem('discount', JSON.stringify(num))
    }, 25)
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.containerDiscount}>
      <div className={styles.titleDiscount}>По подписке</div>
      <div className={styles.containerDiscountValue}>
        <label
          className={`${styles.switch}`}
          onClick={handleViewDiscount}>
          <input type="checkbox" ref={checkboxRef} checked={isChecked} onChange={handleToggle} />
          <span className={`${styles.slider} ${isChecked ? styles.active : ''} ${styles.round}`}></span>
        </label>
      </div>
      {/* <div className={`${activeDiscount ? styles.numberAnimate : ''} ${styles.discountValue}`}>{`${number}%`}</div> */}
      <div className={`${activeDiscount ? styles.numberAnimate : ''} ${styles.discountValue}`}>{`${localStorage.getItem('discount')}%`}</div>
    </div>
  )
}