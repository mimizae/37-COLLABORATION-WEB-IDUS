import * as styles from "./benefit.css";
import { Benefit as IconPlus } from "@/assets/svg";

export const Benefit = ({
  type = "membership-benefit",
}: {
  type: "membership-benefit" | "pay-benefit" | "benefit-more";
}) => {
  if (type == "membership-benefit") {
    return (
      <div className={styles.container({ type: "membership-benefit" })}>
        <div className={styles.benefitTitle}>
          <div className={styles.text({ type: "sm", color: "gray" })}>
            월 1,200원 멤버십 가입시 혜택가
          </div>
          <div>
            <span className={styles.text({ type: "lg", color: "brand" })}>
              7,111
            </span>
            <span className={styles.text({ type: "md", color: "brand" })}>
              원
            </span>
          </div>
        </div>
        <div className={styles.benefitContent}>
          <div
            className={`${styles.benefitBadge} ${styles.text({ type: "sm", color: "brand" })}`}>
            4,000원 쿠폰
          </div>
          <div
            className={`${styles.benefitBadge} ${styles.text({ type: "sm", color: "brand" })}`}>
            25% 할인
          </div>
        </div>
      </div>
    );
  }
  if (type === "pay-benefit") {
    return (
      <>
        <div className={styles.container({ type: "pay-benefit" })}>
          <div className={styles.benefitTitle}>
            <span className={styles.text({ type: "sm", color: "gray" })}>
              결제 혜택
            </span>
            <span className={styles.text({ type: "md", color: "black" })}>
              토스 페이
            </span>
          </div>
          <div
            className={`${styles.benefitContent} ${styles.text({ type: "sm", color: "gray" })}`}>
            4만원 이상 결제 시<br />
            1% 할인
          </div>
        </div>
        <div className={styles.container({ type: "pay-benefit" })}>
          <div className={styles.benefitTitle}>
            <span className={styles.text({ type: "sm", color: "gray" })}>
              결제 혜택
            </span>
            <span className={styles.text({ type: "md", color: "black" })}>
              Npay
            </span>
          </div>
          <div
            className={`${styles.benefitContent} ${styles.text({ type: "sm", color: "gray" })}`}>
            기본 최대 할인 <br />
            1%
          </div>
        </div>
      </>
    );
  }
  if (type === "benefit-more") {
    return (
      <div className={styles.container({ type: "benefit-more" })}>
        <IconPlus />
        <div className={styles.text()}>
          혜택
          <br />
          더보기
        </div>
      </div>
    );
  }
};
