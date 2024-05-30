import styles from "./page.module.css";
import Input from "./components/input";
import Score from "./components/score";
import Graph from "./components/graph";
import Options from "./components/options";
import Error from "./components/error";
import Loader from "./components/loader";

export default function Home() {

  return (
    <main className={styles.main}>
      <h1 className={styles.appTitle}>Player of words</h1>
      <div className={styles.appContainer}>
        <div className={styles.mainContent}>
          <Loader />
          <Input />
          <Error />
          <Score />
          <Graph />
        </div>
        <Options />
      </div>
    </main>
  );
}
