import { LucideIcon } from 'lucide-react';

/**
 * 네비게이션 아이템 타입
 *
 * @property title - 메뉴 제목
 * @property href - 링크 경로
 * @property icon - Lucide 아이콘
 * @property badge - 선택적 배지 (알림 수 등)
 */
export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
}
