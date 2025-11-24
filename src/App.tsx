import { Benefit } from "./shared/components/benefit/benefit";
import * as styles from "./test.css";

function App() {
  return (
    <div className={styles.test}>
      <Benefit type="membership-benefit" />
      <Benefit type="pay-benefit" />
      <Benefit type="benefit-more" />
    </div>
  );
}

export default App;
