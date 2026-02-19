'use client';

import { type SimpleIcon } from 'simple-icons';

interface TechIconProps {
  icon: SimpleIcon;
  className?: string;
}

/**
 * 기술 스택 아이콘 컴포넌트
 *
 * @description simple-icons의 SVG path를 렌더링합니다.
 * 브랜드 공식 색상을 사용하며, 다크모드를 지원합니다.
 */
export function TechIcon({ icon, className = 'h-8 w-8' }: TechIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill={`#${icon.hex}`}
      className={className}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}
