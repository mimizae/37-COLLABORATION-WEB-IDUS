import React, { useState } from "react";
import * as styles from "./accordian.css";
import { ArrowRight, ChevronDown } from "@/assets/svg";

interface AccrodianProps {
  type: "maker" | "bottom-sheets";
  title: string;
  selectedOption?: string;
  iconType?: "arrow" | "chevron";
  onClick?: () => void;
  children?: React.ReactNode;
}
export const Accrodian = ({
  type,
  title,
  selectedOption,
  onClick,
  iconType = "chevron",
  children,
}: AccrodianProps) => {
  const isMaker = type === "maker";
  const isArrowIcon = iconType === "arrow";
  const hasBorder = isMaker && isArrowIcon;

  const [isAccrodianOpen, setIsAccrodianOpen] = useState(false);

  const handleAccrodianClick = () => {
    setIsAccrodianOpen((prev) => !prev);
    onClick?.();
  };

  const renderIcon = () => {
    if (isArrowIcon) return <ArrowRight />;
    return (
      <span className={styles.toggleIcon({ isAccrodianOpen })}>
        <ChevronDown width={isMaker ? 24 : 20} height={isMaker ? 24 : 20} />
      </span>
    );
  };

  return (
    <div className={styles.container({ type, hasBorder })}>
      <div className={styles.accordion} onClick={handleAccrodianClick}>
        <div className={styles.titleWrapper}>
          <span className={styles.title({ type })}>{title}</span>
          {!isMaker && (
            <span className={styles.bottomSheetsOption}>
              선택 |
              <span className={styles.selectedValue}>{selectedOption}</span>
            </span>
          )}
        </div>
        <div className={styles.optionIconWrapper}>
          {isMaker && (
            <span className={styles.makerOption}>{selectedOption}</span>
          )}
          {renderIcon()}
        </div>
      </div>
      {!isArrowIcon && (
        <div
          className={styles.contentWrapper({
            isAccrodianOpen,
          })}>
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </div>
  );
};
