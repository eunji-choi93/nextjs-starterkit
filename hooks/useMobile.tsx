'use client';

import { useEffect, useState } from 'react';

/**
 * 모바일 기기 감지 훅
 *
 * @description 창 크기를 감지하여 모바일 여부를 반환합니다.
 * 기본 breakpoint는 768px입니다.
 *
 * @param breakpoint - 모바일 판단 기준 너비 (기본값: 768)
 * @returns 모바일 여부
 */
export function useMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 초기 체크
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [breakpoint]);

  return isMobile;
}
