'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useMobile } from '@/hooks/useMobile';
import { NavigationItem } from '@/types/navigation';

/**
 * 사이드바 컴포넌트 props
 */
interface SidebarProps {
  items: NavigationItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

/**
 * 사이드바 네비게이션 컴포넌트
 *
 * @description 접을 수 있는 측면 네비게이션입니다.
 * 모바일에서는 Sheet 컴포넌트로 변환됩니다.
 *
 * @param items - 네비게이션 아이템 배열
 * @param isOpen - 모바일 사이드바 열림 상태
 * @param onClose - 모바일 사이드바 닫기 핸들러
 */
export function Sidebar({ items, isOpen = false, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();

  // 네비게이션 아이템 렌더링
  const renderNavItem = (item: NavigationItem, collapsed: boolean) => {
    const isActive = pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={isMobile ? onClose : undefined}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          isActive
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground',
          collapsed && 'justify-center'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
        {!collapsed && (
          <>
            <span className="flex-1">{item.title}</span>
            {item.badge && (
              <Badge variant="secondary" className="ml-auto">
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </Link>
    );
  };

  // 모바일: Sheet 컴포넌트
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="px-4 pt-4">
            <SheetTitle>메뉴</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 p-4" aria-label="메인 네비게이션">
            {items.map((item) => renderNavItem(item, false))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  // 데스크톱: 고정 사이드바
  return (
    <aside
      className={cn(
        'relative flex flex-col border-r bg-background transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* 네비게이션 영역 */}
      <nav
        className="flex flex-1 flex-col gap-1 p-4"
        aria-label="메인 네비게이션"
      >
        {items.map((item) => renderNavItem(item, isCollapsed))}
      </nav>

      <Separator />

      {/* 접기/펼치기 버튼 */}
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full"
          aria-label={isCollapsed ? '사이드바 펼치기' : '사이드바 접기'}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4" />
              <span className="ml-2">접기</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}
