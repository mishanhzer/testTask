import React, { useState, useEffect, useRef, useCallback } from "react";
import { useStore } from "../../../../store/store";
import styles from '../shopAnimals.module.scss'

interface TypesSavePanel {
  activeDiscount: boolean
  setActiveDiscount: React.Dispatch<React.SetStateAction<boolean>>
}

export const SubscribePanel = ({ activeDiscount, setActiveDiscount }: TypesSavePanel) => {
  const setDiscount = useStore(state => state.setDiscount)

  const testData = useStore(state => state.testData)

  const [number, setNumber] = useState(0)

  const checkboxRef = useRef<HTMLInputElement>(null);

  const [isChecked, setIsChecked] = useState(() => {
    const storedValue = localStorage.getItem('isChecked'); // true or false
    return storedValue === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isChecked', isChecked.toString());
  }, [isChecked]);

  const handleViewDiscount = () => {
    isChecked ? setActiveDiscount(false) : setActiveDiscount(true)
    isChecked ? setDiscount(true) : setDiscount(false)
  }

  const handleToggle = useCallback(() => { // юзаем хук, чтобы мемоизировать функцию (при изменении состояния isChecked, которая меняем состояние activeDiscount внутри ShopAnimals, чтобы не вызывать перерендер родительского компонента)
    const storedDiscount = localStorage.getItem('discount');
    let num = storedDiscount ? JSON.parse(storedDiscount) : 0; // JSON.parse (принимает строку JSON и возвращает js обьект) используем, чтобы избежать ошибки, если значение будет null, до этого юзали parseInt (принимает строку и возвращает целое число) и была ошибка, потому что значение не было явным числом, 

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
  }, [isChecked, setActiveDiscount])


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
      <div className={`${activeDiscount ? styles.numberAnimate : ''} ${styles.discountValue}`}>{`${localStorage.getItem('discount')}%`}</div>
    </div>
  )
}
