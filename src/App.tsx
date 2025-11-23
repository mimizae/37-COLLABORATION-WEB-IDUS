import { MakerInfo } from "./shared/components/maker-info/maker-info";
import * as styles from "./test.css";

function App() {
  return (
    <div className={styles.test}>
      <MakerInfo
        name="SPEDEAR"
        description="소중한 순간을 담을 수 있는 아이템..."
      />
    </div>
  );
}

export default App;
