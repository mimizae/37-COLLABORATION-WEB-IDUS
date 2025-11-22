import { useState } from "react";
import { LikeButton } from "./shared/components/like-button/like-button";

function App() {
  const [makerLiked, setMakerLiked] = useState(false);
  const [bottomSheetLiked, setBottomSheetLiked] = useState(false);

  const handleChangeMakerLikeState = () => {
    // api 호출 이후 업데이트
    // 여기에서 낙관적 업데이트 적용
    setMakerLiked((prev) => !prev);
  };

  const handleChangeBSLikeState = () => {
    // api 호출 이후 업데이트
    setBottomSheetLiked((prev) => !prev);
  };

  return (
    <div>
      <LikeButton
        type="maker"
        liked={makerLiked}
        count={9999}
        onClick={handleChangeMakerLikeState}
      />

      <LikeButton
        type="bottom-sheets"
        liked={bottomSheetLiked}
        count={999}
        onClick={handleChangeBSLikeState}
      />
    </div>
  );
}

export default App;
