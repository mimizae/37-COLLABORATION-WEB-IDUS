import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode; // 실제 렌더링할 컴포넌트
  fallback?: ReactNode; // 컴포넌트가 로딩될때 보여줄 UI
  threshold?: number; // 렌더링할 컴포넌트가 얼마나 보여야 트리거할지 (0.0~1.0)
  rootMargin?: string; // 미리 로딩할 여유 공간
}

// 컴포넌트가 화면에 보이는 순간에만 children을 렌더링함
const LazySection = ({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = "100px",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null); // ref: 특정 DOM 요소 참조, 이 ref가 div 요소를 가리킴
  const [isVisible, setIsVisible] = useState(false); // 화면 진입 시 true로 상태 변경

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번만 실행되도록 observer 해제
        }
      },
      {
        threshold, // 렌더링할 컴포넌트가 얼마나 보여야 트리거할지 (0.1 = 10%)
        rootMargin, // 미리 로딩할 여유 공간 (100px 전에 미리 로드)
      }
    );

    if (ref.current) {
      observer.observe(ref.current); // useEffect 안에 있으므로 DOM이 생성된 후 실행됨
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return <div ref={ref}>{isVisible ? children : fallback}</div>;
  // JSX가 반환되면 React가 실제 DOM에 이 <div>를 생성하고,
  // ref.current에 실제 DOM 요소가
};

export default LazySection;
