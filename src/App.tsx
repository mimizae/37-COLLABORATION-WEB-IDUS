import { ProductSummary } from "./pages/home/components/product-summary/product-summary";
import { ProductDetail } from "./pages/product-detail/product-detail";
import * as styles from "./test.css";

function App() {
  return (
    <div className={styles.test}>
      <ProductSummary />
      <ProductDetail />
    </div>
  );
}

export default App;
