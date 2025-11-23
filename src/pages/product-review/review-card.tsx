import { default as Star } from "@svg/star.svg?react";
import * as styles from "./review-card.css";

interface ReviewCardProps {
  nickname: string; // 닉네임
  rating: number; // 별점
  createdDate: string; // 작성일
  content: string; // 후기 내용
}

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    // 후기 카드 전체
    <article className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        {/* 왼쪽 프로필 */}
        <div className={styles.reviewProfile}></div>

        {/* 오른쪽: 닉네임 + (작성일 / 별점) */}
        <div>
          <p className={styles.reviewNickname}>{props.nickname}</p>
          <div className={styles.reviewMeta}>
            <span>{props.createdDate}</span>
            <span className={styles.reviewRating}>
              <span className={styles.reviewStarWrapper}>
                <Star />
              </span>
              {props.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* 본문: 후기 내용 */}
      <p className={styles.reviewContent}>{props.content}</p>
    </article>
  );
};
