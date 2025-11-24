import { BottomSheetAccordion } from "./shared/components/accordian/bottom-sheet-accordian";
import { MakerAccordion } from "./shared/components/accordian/maker-accordian";
import * as styles from "./test.css";

function App() {
  return (
    <div className={styles.test}>
      <MakerAccordion
        title="제작 / 배송"
        selectedOption="평균 1일 / 최대 1일 이내"
      />
      <BottomSheetAccordion title="제목 설정" selectedOption="앨범 제목만">
        <div className={styles.children}>하하하</div>
        <div className={styles.children}>하하하</div>
      </BottomSheetAccordion>
      <MakerAccordion iconType="arrow" title="작품 제보하기" />
    </div>
  );
}

export default App;
