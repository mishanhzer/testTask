import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './spinner.module.scss'

export const Spinner = () => {
  return (
    <div
      className={`${styles.spinnerContainer}`}>
      <div className={`${styles.spinner} spinner-border text-primary`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
