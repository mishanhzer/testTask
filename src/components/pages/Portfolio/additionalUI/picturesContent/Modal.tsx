import ReactDOM from 'react-dom';
import React, { useRef, useState, useEffect, useMemo, useLayoutEffect } from 'react';

import { AnimationSinglePicture } from '../dataPicturesAndFuncWidget'

import styles from '../../styles/mainStylesPictures.module.scss'

interface TypesModalPortal {
  position: string
  handleClose: () => void
  source?: string
  alt?: string
}

export const ModalPortal = ({ position, handleClose, source, alt }: TypesModalPortal) => {
  const [heightImage, setHeightImage] = useState<number>(0)
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (ref.current) {
      setHeightImage((ref.current as unknown as HTMLElement).getBoundingClientRect().height);
    }
  }, [])

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

  // const handleClass = useMemo(() => {
  //   if (heightImage > 0) {
  //     if (heightImage < 350) {
  //       return `${styles.mainWrapperStyle} scale-[1.2]`
  //     }
  //     if (heightImage > 350 && heightImage <= 450) {
  //       return `${styles.mainWrapperStyle} scale-[1.2]`
  //     }
  //     if (heightImage > 600 && heightImage < 700) {
  //       return `${styles.mainWrapperStyle} scale-[1.2]`
  //     }
  //     else {
  //       return ${styles.mainWrapperStyle}` scale-[1.2]`
  //     }
  //   } else {
  //     return styles.mainWrapperStyle;
  //   }
  // }, [heightImage])

  console.log(position)
  const positionModal = useMemo(() => {
    switch (position) {
      case 'akitoInu.jpg':
        return `${styles.mainWrapperStyle} mt-[-150px]`
      case 'beagle.jpg':
        return `${styles.mainWrapperStyle}`
      case 'blueAndYellowMacaw.jpg':
        return `${styles.mainWrapperStyle} mt-[-150px]`
    }
  }, [])

  return ReactDOM.createPortal(
    <AnimationSinglePicture>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => handleClose()}
          className={`${styles.overlay}`}>
          <div onClick={(e) => e.stopPropagation()}
            className={positionModal}
          >
            <button onClick={handleClose} className={styles.close} />
            <img ref={ref} className={`absolute lozad`} src={source} alt={alt} />
          </div>
        </div>
      </div>
    </AnimationSinglePicture >,
    portalDiv
  );
};
