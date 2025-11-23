import * as styles from "./test.css";

import { Header } from "./shared/components/header";
import { Content } from "./shared/components/content";
import Section1 from "./shared/components/section1";
import Section2 from "./shared/components/section2";
import Section3 from "./shared/components/section3";
import { TabBar } from "./shared/components/tab-bar/tab-bar";
import { useScrollableTabs } from "./shared/hooks/useScrollableTabs";

function App() {
  const { productInfoRef, reviewRef, recommendRef, activeTab, handleTabClick } =
    useScrollableTabs();

  return (
    <div className={styles.test}>
      <Header />

      {/* 내용들 - 탭바 위에 있을 캐러셀 부분 ㅎㅎ */}
      {[...Array(20)].map((_, i) => (
        <Content key={i} type="내용" />
      ))}

      {/* 탭바 - sticky로 헤더에 닿으면!! 고정 */}
      <TabBar activeTab={activeTab} onTabClick={handleTabClick} />

      {/* 작품 정보, 후기, 추천 섹션들 - 탭바 아래 */}
      <div ref={productInfoRef} data-section="product-info">
        <Section1 />
      </div>

      <div ref={reviewRef} data-section="review">
        <Section2 />
      </div>

      <div ref={recommendRef} data-section="recommend">
        <Section3 />
      </div>
    </div>
  );
}

export default App;
