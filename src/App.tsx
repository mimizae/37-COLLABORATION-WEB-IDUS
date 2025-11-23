import * as styles from "./test.css";
import { ReviewCard } from "@/pages/product-review/review-card";

function App() {
  return (
    <div className={styles.test}>
      <ReviewCard
        nickname="닉네임"
        createdDate="2024.11.25"
        rating={4.0}
        content="여자친구 생일에 특별한 편지를 주고싶어서 찾아보다가 이쁜 카세트로 목소리를 녹음해서 줄수있는게 있길래 한번 구매해봤어요 아직 전달을 하지는 못했지만 사진도 정말 이쁘게 들어가있고 문구와 디자인도 너무 이쁜것 같아요 새로운 감동을 줄 수 있을것 같습니다 대만족이에요!"
      />
    </div>
  );
}

export default App;
