import React, { useRef, useState } from "react";

interface UseBottomSheetDragProps {
  onClose: () => void;
}

export const useBottomSheetDrag = ({ onClose }: UseBottomSheetDragProps) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0); // 드래그를 시작한 y좌표
  const [sheetDragStartY, setSheetDragStartY] = useState<number | null>(null); // sheet을 내리기 시작한 y좌표
  const [dragDistance, setDragDistance] = useState(0); // sheet을 내리기 위한 드래그 이동 거리
  const [isDragging, setIsDragging] = useState(false);

  // 드래그 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY); // 드래그를 시작한 y좌표 세팅
    setIsDragging(true);
  };

  // sheet을 실제로 드래그하는 로직
  const moveSheet = (currentY: number) => {
    if (sheetDragStartY === null) {
      setSheetDragStartY(currentY);
    }

    const sheetDeltaY = currentY - (sheetDragStartY ?? currentY);
    setDragDistance(sheetDeltaY);

    if (sheetRef.current) {
      sheetRef.current.style.transition = "none"; // handleTouchEnd에서 추가된 transition 제거 -> sheet가 드래그에 즉각 반응
      sheetRef.current.style.transform = `translateY(${sheetDeltaY}px)`;
    }
  };

  // 드래그 중 - content 영역
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY; // 현재 드래그 y좌표
    const deltaY = currentY - startY; // 드래그 이동 거리

    // 드래그가 위에서 아래로 진행될 때 if문 진입(content를 위로 스크롤하거나, 바텀시트를 닫기 위한 드래그 액션)
    if (deltaY > 0) {
      // content의 최상단에 도달했을때 if문 진입 및 sheet 드래그
      if (contentRef.current && contentRef.current.scrollTop === 0) {
        moveSheet(currentY);
      }
    }
  };

  // 드래그 중 - drag handler 영역
  const handleDragHandlerMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      // drag handler 조작 시 scrollTop 체크 없이 바로 sheet 드래그
      moveSheet(currentY);
    }
  };

  // 드래그 종료
  const handleTouchEnd = () => {
    setIsDragging(false);

    if (sheetRef.current) {
      // 200px 이상 드래그하면 닫기
      if (dragDistance > 200) {
        // 부드럽게 아래로 내려가며 닫기
        sheetRef.current.style.transition = "transform 0.2s ease-in";
        sheetRef.current.style.transform = "translateY(100%)";

        // transition 완료 후 onClose 호출
        setTimeout(() => {
          onClose();
        }, 200);
      } else {
        // 원위치로 복귀
        sheetRef.current.style.transition = "transform 0.3s ease-out";
        sheetRef.current.style.transform = "translateY(0)";
      }
    }

    setDragDistance(0);
    setSheetDragStartY(null);
  };

  return {
    sheetRef,
    contentRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleDragHandlerMove,
  };
};
