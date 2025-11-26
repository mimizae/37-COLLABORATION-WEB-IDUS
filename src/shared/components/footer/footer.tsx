import { LikeButton } from "@/shared/components/like-button/like-button";
import * as styles from "./footer.css";
import { useState } from "react";
import SmallButton from "@/shared/components/button/small-button/small-button";
import { SMALL_BUTTON_VARIANTS } from "@/shared/constants/button";
import BottomSheet from "@/shared/components/bottom-sheet/bottom-sheet";
import FooterDetail from "@/shared/components/footer-detail/footer-detail";
import Purchase from "@/pages/purchase/purchase";

const Footer = () => {
  const [isProductLiked, setIsProductLiked] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleProductLike = () => {
    // 임시
    setIsProductLiked((prev) => !prev);
  };

  const handleGiftClick = () => {
    // ...
  };

  const handlePurchaseClick = () => {
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <footer className={styles.layout}>
      <div className={styles.wrapper}>
        <FooterDetail />

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
      </div>

      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleBottomSheetClose}>
        <FooterDetail />
        <Purchase />
      </BottomSheet>
    </footer>
  );
};

export default Footer;
