import { useState } from "react";
import LargeButton from "@/shared/components/button/large-button/large-button";
import { LARGE_BUTTON_VARIANTS } from "@/shared/constants/button";
import { useProductReviewQuery } from "@/apis/queries/use-product-review.query";
import { ReviewCard } from "./review-card";
import * as styles from "./review-list.css";

const PAGE_SIZE = 5;

export const ReviewList = () => {
  const productId = 1;
  const { data } = useProductReviewQuery(productId);
  const [isExpanded, setIsExpanded] = useState(false);

  const reviews = data?.reviewResponses ?? [];
  const visibleReviews = isExpanded ? reviews : reviews.slice(0, PAGE_SIZE);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className={styles.reviewListSection}>
      {visibleReviews.map((review) => (
        <ReviewCard
          key={review.reviewId}
          nickname={review.reviewer?.nickname ?? "익명"}
          profileImageUrl={review.reviewer?.profileImageUrl}
          createdAt={review.createdAt}
          score={review.score}
          content={review.content}
        />
      ))}

      {reviews.length > PAGE_SIZE && (
        <div className={styles.loadMoreWrapper}>
          <LargeButton
            type="button"
            variant={LARGE_BUTTON_VARIANTS.DEFAULT}
            hasArrow={false}
            onClick={handleToggle}
            aria-label={
              isExpanded ? "작품 구매 후기 접기" : "작품 구매 후기 더보기"
            }>
            {isExpanded ? "작품 구매 후기 접기" : "작품 구매 후기 더보기"}
          </LargeButton>
        </div>
      )}
    </section>
  );
};
