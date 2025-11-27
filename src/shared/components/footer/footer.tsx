import { Suspense } from "react";
import { LikeButton } from "@/shared/components/like-button/like-button";
import * as styles from "./footer.css";
import SmallButton from "@/shared/components/button/small-button/small-button";
import { SMALL_BUTTON_VARIANTS } from "@/shared/constants/button";
import BottomSheet from "@/shared/components/bottom-sheet/bottom-sheet";
import useBottomSheet from "@/shared/components/bottom-sheet/hooks/use-bottom-sheet";
import FooterDetail from "@/shared/components/footer-detail/footer-detail";
import Purchase from "@/pages/purchase/purchase";
import { useProductLikeMutation } from "@/apis/mutations/use-product-like.mutation";
import { useProductInfo } from "@/apis/queries/use-product-info.query";

const ProductLikeButton = () => {
  const productId = 1;
  const userId = 1;

  const { data: productInfo } = useProductInfo({ productId, userId });
  const { mutate: likeProduct } = useProductLikeMutation();

  const handleProductLike = () => {
    likeProduct({ productId, userId });
  };

  return (
    <LikeButton
      variant="bottom-sheets"
      liked={productInfo.isLiked}
      count={productInfo.likeCount}
      onClick={handleProductLike}
    />
  );
};

const Footer = () => {
  const { isOpen, open, close } = useBottomSheet();

  return (
    <footer className={styles.layout}>
      <div className={styles.wrapper}>
        <FooterDetail />

        <div className={styles.container}>
          <Suspense
            fallback={
              <LikeButton variant="bottom-sheets" liked={false} count={0} />
            }>
            <ProductLikeButton />
          </Suspense>

          <div className={styles.buttonContainer}>
            <SmallButton
              variant={SMALL_BUTTON_VARIANTS.GIFT}
              type="button"
              aria-label="선물하기">
              선물하기
            </SmallButton>

            <SmallButton
              variant={SMALL_BUTTON_VARIANTS.PURCHASE}
              onClick={open}
              type="button"
              aria-label="구매하기">
              구매하기
            </SmallButton>
          </div>
        </div>
      </div>

      <BottomSheet isOpen={isOpen} onClose={close}>
        <FooterDetail />
        <Purchase />
      </BottomSheet>
    </footer>
  );
};

export default Footer;
