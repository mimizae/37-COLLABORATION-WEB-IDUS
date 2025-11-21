import { useRef, useState } from "react";
import { CAROUSEL_IMAGES } from "../../constants/carousel/carousel-images";
import * as styles from "./carousel.css";
import { addComma } from "@/shared/utils/add-comma";

export const Carousel = () => {
  const [discountedPrice] = useState(2205);
  const carouselRef = useRef<HTMLDivElement>(null); // 캐러셀 트랙
  const EXTENDED_IMAGES = [
    CAROUSEL_IMAGES[CAROUSEL_IMAGES.length - 1],
    ...CAROUSEL_IMAGES,
    CAROUSEL_IMAGES[0],
  ]; // 무한 스크롤 이미지 배열

  return (
    <div className={styles.container}>
      {/** 캐러셀 헤더 */}
      <div className={styles.header}>
        <div className={styles.headerTitle({ isBold: false })}>
          아이디어스는 전제품{" "}
          <span className={styles.headerTitle({ isBold: true })}>무료</span>배송
        </div>
      </div>
      {/** 캐러셀 컴포넌트 */}
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack} ref={carouselRef}>
          {EXTENDED_IMAGES.map((image, index) => (
            <img
              draggable={false}
              className={styles.image}
              key={`${image.id}-${index}`}
              src={image.image}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
      {/** 캐러셀 푸터 (이미지 번호, 뱃지) */}
      <div className={styles.footer}>
        <div className={styles.page}>
          <span>1</span>
          <span>/</span>
          <span>8</span>
        </div>
        <div className={styles.badge}>
          <span>아이콘</span>
          <span>{addComma(String(discountedPrice))}원 할인 종료</span>
          <span className={styles.period}>D-2</span>
        </div>
      </div>
    </div>
  );
};
