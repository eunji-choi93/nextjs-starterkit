import { DashboardShell } from '@/components/layout/dashboard-shell';

/**
 * 대시보드 레이아웃 (Server Component)
 *
 * @description 헤더, 사이드바, 메인 콘텐츠 영역으로 구성된 레이아웃입니다.
 * 인터랙티브 상태 관리 및 네비게이션 아이템은 DashboardShell(Client Component)에서 처리합니다.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
