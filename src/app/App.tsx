import { AppWrapper } from "../features/Layout/AppWrapper/AppWrapper";
import { MySwiper } from "../features/Layout/AppWrapper/AppWrapper";

import styles from './app.module.scss'
import "./app.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AppWrapper />
      {/* <MySwiper /> */}
    </div>
  );
};

export default App;
