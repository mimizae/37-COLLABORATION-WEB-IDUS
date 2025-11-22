import * as styles from "./like-button.css";
import {
  BottomSheetHeart,
  BottomSheetHeartFill,
  MakerHeart,
  MakerHeartFill,
} from "@/assets/svg";

interface LikeButtonProps {
  type: "bottom-sheets" | "maker";
  liked: boolean;
  count: number;
  onClick?: () => void;
}

export const LikeButton = ({
  type,
  liked,
  count,
  onClick,
}: LikeButtonProps) => {
  const heartIcons = {
    maker: liked ? <MakerHeartFill /> : <MakerHeart />,
    "bottom-sheets": liked ? <BottomSheetHeartFill /> : <BottomSheetHeart />,
  };

  return (
    <button
      type="button"
      aria-pressed={liked}
      className={styles.container({ type })}
      onClick={onClick}>
      <span className={styles.iconWrapper}>{heartIcons[type]}</span>
      <span className={styles.count}>{count}</span>
    </button>
  );
};
