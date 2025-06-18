import React, { useState, useRef } from "react";
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

  const discount = useStore(state => state.discount)
  console.log(discount)

  const handleViewDiscount = () => {
    let num = number
    const isChecked = checkboxRef.current?.checked
    const interval = setInterval(() => {
      if (isChecked) {
        num++
        if (num >= 20) clearInterval(interval)
      } else {
        num--
        if (num <= 0) clearInterval(interval)
      }
      setNumber(num)
    }, 25)

    isChecked ? setActiveDiscount(true) : setActiveDiscount(false)
    isChecked ? setDiscount(true) : setDiscount(false)
  }

  return (
    <div className={styles.containerDiscount}>
      <div className={styles.titleDiscount}>По подписке</div>
      <div className={styles.containerDiscountValue}>
        <label
          className={`${styles.switch}`}
          onClick={handleViewDiscount}>
          <input type="checkbox" ref={checkboxRef} />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={`${activeDiscount ? styles.numberAnimate : ''} ${styles.discountValue}`}>{`${number}%`}</div>
    </div>
  )
}