import styles from './App.module.css';
import StartGroup from "./groups/startGroup/StartGroup";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";

function App() {
  return (
    <div className={styles.app}>
        <SideMenuGroup/>
        <StartGroup/>
    </div>
  );
}

export default App;
