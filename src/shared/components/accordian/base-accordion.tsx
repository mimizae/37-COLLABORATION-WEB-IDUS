import * as styles from "./base-accordian.css";
import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ChevronDown } from "@/assets/svg";

interface BaseAccordionProps {
  title: string;
  isExpandable?: boolean;
  iconSize?: number;
  renderHeader?: () => ReactNode;
  renderIcon?: (_isOpen: boolean) => ReactNode;
  onClick?: () => void;
  children?: ReactNode;
  styleType: "maker" | "bottom-sheets";
  hasBorder?: boolean;
}

export const BaseAccordion = ({
  title,
  isExpandable = true,
  iconSize = 20,
  renderHeader,
  renderIcon,
  onClick,
  children,
  styleType,
  hasBorder = false,
}: BaseAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccrodianClick = () => {
    if (isExpandable) {
      setIsOpen((prev) => !prev);
    }
    onClick?.();
  };

  const defaultIcon = isExpandable ? (
    <span className={styles.toggleIcon({ isAccrodianOpen: isOpen })}>
      <ChevronDown width={iconSize} height={iconSize} />
    </span>
  ) : (
    <ArrowRight />
  );

  return (
    <div className={styles.container({ type: styleType, hasBorder })}>
      <div className={styles.accordion} onClick={handleAccrodianClick}>
        <div className={styles.titleWrapper}>
          <span className={styles.title({ type: styleType })}>{title}</span>
          {renderHeader?.()}
        </div>
        <div className={styles.optionIconWrapper}>
          {renderIcon ? renderIcon(isOpen) : defaultIcon}
        </div>
      </div>
      {isExpandable && (
        <div className={styles.contentWrapper({ isAccrodianOpen: isOpen })}>
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </div>
  );
};
