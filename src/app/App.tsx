import { AppWrapper } from "../features/Layout/AppWrapper/AppWrapper";
import { MySlider } from "../features/Layout/AppWrapper/AppWrapper";

import styles from './app.module.scss'
import "./app.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AppWrapper />
      <MySlider />
    </div>
  );
};

export default App;
