import * as styles from "./product-summary-item.css";

interface ProductSummaryItemProps {
  summary: {
    title: string;
    description: string;
    readonly badges?: readonly string[];
    readonly image?: string;
  };
}

export const ProductSummaryItem = ({ summary }: ProductSummaryItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.text({ type: "title" })}>{summary.title}</div>
      <div className={styles.information}>
        <div className={styles.text({ type: "description" })}>
          {summary.description}
        </div>
        {/** badges와 image는 옵션 */}
        {summary.badges && (
          <div className={styles.badgeContainer}>
            {summary.badges.map((badge) => (
              <div key={badge} className={styles.badge}>
                {badge}
              </div>
            ))}
          </div>
        )}
        {summary.image && (
          <img
            className={styles.image}
            src={summary.image}
            alt="상품 세부 이미지"
          />
        )}
      </div>
    </div>
  );
};
