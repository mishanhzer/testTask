import { historyDate } from './constants'
import styles from './historyDate.module.scss'

export const HistoryDate = () => {
  return (
    <div className={styles.historyDate}>
      {historyDate}
    </div>
  )
}