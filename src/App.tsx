import { ReviewSummary } from "./pages/review-summary/review-summary";

import Product01 from "@/assets/img/product-01.png";

const DUMMY_AVERAGE_SCORE = 4.8;
const DUMMY_REVIEW_COUNT = 634;
const DUMMY_THUMBNAILS = Array.from({ length: 6 }, () => Product01);
const DUMMY_AI_SUMMARY =
  "작가님의 작품은 정말 특별하고신선해요! 포장도 꼼꼼하고 배송도 빠르네요. 친구나 소중한 분께 선물하기에 딱 좋습니다. 정성스럽게 만들어주셔서 감사합니다!";

function App() {
  return (
    <ReviewSummary
      averageScore={DUMMY_AVERAGE_SCORE}
      reviewCount={DUMMY_REVIEW_COUNT}
      aiSummary={DUMMY_AI_SUMMARY}
      thumbnails={DUMMY_THUMBNAILS}
    />
  );
}

export default App;
