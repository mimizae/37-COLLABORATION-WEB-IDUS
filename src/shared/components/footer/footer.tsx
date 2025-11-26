import { LikeButton } from "@/shared/components/like-button/like-button";
import * as styles from "./footer.css";
import { useState } from "react";
import SmallButton from "@/shared/components/button/small-button/small-button";
import { SMALL_BUTTON_VARIANTS } from "@/shared/constants/button";

const Footer = () => {
  const [isProductLiked, setIsProductLiked] = useState(false);

  const handleProductLike = () => {
    // 임시
    setIsProductLiked((prev) => !prev);
  };

  const handleGiftClick = () => {
    // ...
  };

  const handlePurchaseClick = () => {
    // ...
  };

  return (
    <footer className={styles.layout}>
      <div className={styles.container}>
        <LikeButton
          variant="bottom-sheets"
          liked={isProductLiked}
          count={0}
          onClick={handleProductLike}
        />

        <div className={styles.buttonContainer}>
          <SmallButton
            variant={SMALL_BUTTON_VARIANTS.GIFT}
            onClick={handleGiftClick}
            type="button"
            aria-label="선물하기">
            선물하기
          </SmallButton>

          <SmallButton
            variant={SMALL_BUTTON_VARIANTS.PURCHASE}
            onClick={handlePurchaseClick}
            type="button"
            aria-label="구매하기">
            구매하기
          </SmallButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
