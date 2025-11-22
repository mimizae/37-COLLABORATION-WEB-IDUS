import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import * as styles from "./bottom-sheet.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: Props) => {
  // Body scroll lock: 바텀시트 열렸을 때 뒷배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // body 태그가 페이지 전체의 스크롤을 제어하므로,
      // body의 overflow 속성을 hidden으로 만들면 뒷배경 스크롤 차단 가능

      return () => {
        // BottomSheet가 언마운트될 때 클린업 함수가 실행되며 body의 스크롤 제어 속성인 overflow를 원래 값으로 복구
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]); // BottomSheet 마운트 시 + isOpen이 변경될 때마다 실행

  if (!isOpen) return null;

  return createPortal(
    // TODO: 접근성 고려
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.sheet}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default BottomSheet;
