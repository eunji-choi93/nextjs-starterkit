'use client';

import { useState } from 'react';
import { Home, LayoutDashboard, Settings } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { NavigationItem } from '@/types/navigation';

/**
 * 대시보드 레이아웃
 *
 * @description 헤더, 사이드바, 메인 콘텐츠 영역으로 구성된 레이아웃입니다.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 네비게이션 아이템 정의
  const navigationItems: NavigationItem[] = [
    {
      title: '홈',
      href: '/',
      icon: Home,
    },
    {
      title: '대시보드',
      href: '/dashboard',
      icon: LayoutDashboard,
      badge: 3,
    },
    {
      title: '설정',
      href: '/settings',
      icon: Settings,
    },
  ];

  return (
    <div className="flex h-screen flex-col">
      {/* 헤더 */}
      <Header
        onMenuClick={() => setIsSidebarOpen(true)}
        showMenuButton
      />

      {/* 사이드바 + 메인 콘텐츠 */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          items={navigationItems}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
