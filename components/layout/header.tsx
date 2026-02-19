'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { UserMenu } from './user-menu';

/**
 * 헤더 컴포넌트 props
 */
interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

/**
 * 헤더 컴포넌트
 *
 * @description 상단 고정 헤더입니다.
 * 로고, 테마 토글, 사용자 메뉴, 햄버거 메뉴를 포함합니다.
 *
 * @param onMenuClick - 메뉴 버튼 클릭 핸들러
 * @param showMenuButton - 햄버거 메뉴 버튼 표시 여부
 */
export function Header({ onMenuClick, showMenuButton = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        {/* 햄버거 메뉴 버튼 (모바일) */}
        {showMenuButton && (
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 md:hidden"
            onClick={onMenuClick}
            aria-label="메뉴 열기"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        {/* 로고/제목 */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-lg font-bold">M</span>
          </div>
          <span className="hidden font-bold sm:inline-block">
            모던 웹 스타터킷
          </span>
        </div>

        {/* 우측 액션 버튼들 */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
