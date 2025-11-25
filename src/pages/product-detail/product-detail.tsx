import * as styles from "./product-detail.css";
import { useState } from "react";
import { LARGE_BUTTON_VARIANTS } from "@/shared/constants/button";
import { PurchaseSafetyNotice } from "./components/purchase-safety-notice";
import LargeButton from "@/shared/components/button/large-button/large-button";
import { ProductInfoNotice } from "./components/product-info-notice";

export const ProductDetail = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className={styles.container}>
      <PurchaseSafetyNotice />
      <LargeButton
        type="button"
        aria-label={isDetailOpen ? "상세 정보 접기" : "상세 정보 더보기"}
        hasArrow
        variant={
          isDetailOpen
            ? LARGE_BUTTON_VARIANTS.ACTIVE
            : LARGE_BUTTON_VARIANTS.DEFAULT
        }
        onClick={() => setIsDetailOpen(!isDetailOpen)}>
        {isDetailOpen ? "상세 정보 접기" : "상세 정보 더보기"}
      </LargeButton>
      <ProductInfoNotice />
    </div>
  );
};
