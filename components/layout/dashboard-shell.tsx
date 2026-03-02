'use client';

import { useState } from 'react';
import { Home, LayoutDashboard, Settings } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { NavigationItem } from '@/types/navigation';

/**
 * 대시보드 네비게이션 아이템 정의
 * Server → Client props 직렬화 문제(아이콘 컴포넌트)를 피하기 위해 Client Component에서 관리합니다.
 */
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
    href: '/dashboard/settings',
    icon: Settings,
  },
];

/**
 * 대시보드 쉘 컴포넌트 (Client Component)
 *
 * @description 사이드바 열림/닫힘 상태를 관리하는 클라이언트 컴포넌트입니다.
 * DashboardLayout을 Server Component로 유지하기 위해 인터랙티브 로직을 분리합니다.
 */
export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
