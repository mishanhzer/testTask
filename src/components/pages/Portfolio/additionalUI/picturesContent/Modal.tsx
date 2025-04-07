import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect } from 'react';

import { AnimationSinglePicture } from '../dataPicturesAndFuncWidget'

import styles from '../../styles/mainStylesPictures.module.scss'

interface TypesModalPortal {
  handleClose: () => void
  source?: string
  alt?: string
}

export const ModalPortal = ({ handleClose, source, alt }: TypesModalPortal) => {
  const [heightImage, setHeightImage] = useState<number>(0)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setHeightImage((ref.current as unknown as HTMLElement).getBoundingClientRect().height); // преобразовываем сначала в тип unknown, а затем приводим его к типу HTMLElement (assertions - приведение к определенному типу)
    }
  }, [ref])

  const portalDiv = document.getElementById('modal-root')!;

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', closeModal)
    return () => {
      window.removeEventListener('keydown', closeModal)
    }
  }, [])

  return ReactDOM.createPortal(
    <AnimationSinglePicture>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => handleClose()}
          className={`${styles.overlay}`}>
          <div onClick={(e) => e.stopPropagation()} className={heightImage === 420 ? styles.littleWindow : styles.modalWrapper}>
            <button onClick={handleClose} className={styles.close} />
            <img ref={ref} className={`${styles.img} lozad`} src={source} alt={alt} />
          </div>
        </div>
      </div>
    </AnimationSinglePicture >,
    portalDiv
  );
};
