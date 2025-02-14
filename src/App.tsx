import { FC } from "react";
import styles from "./App.module.css";
import "./style.css";

const App: FC = () => {
  return (
    <div className={styles.container}>
      <h1>Hello React3</h1>
      <p>How are you?</p>
    </div>
  );
};

export default App;
