import { Activity, Users, CreditCard, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * 대시보드 페이지
 *
 * @description 통계와 정보를 보여주는 대시보드 페이지입니다.
 */
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* 페이지 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">
          프로젝트 현황을 한눈에 확인하세요
        </p>
      </div>

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 사용자</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+20.1%</span> 지난달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> 지난주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">매출</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₩12,450,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.3%</span> 지난달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">성장률</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+15.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+3.1%</span> 지난달 대비
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 최근 활동 섹션 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>
              최근 시스템에서 발생한 주요 활동입니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: '김철수',
                  action: '새로운 프로젝트를 생성했습니다',
                  time: '2시간 전',
                  status: 'success',
                },
                {
                  name: '이영희',
                  action: '설정을 업데이트했습니다',
                  time: '3시간 전',
                  status: 'info',
                },
                {
                  name: '박민수',
                  action: '데이터를 내보냈습니다',
                  time: '5시간 전',
                  status: 'success',
                },
                {
                  name: '최지원',
                  action: '팀 멤버를 초대했습니다',
                  time: '1일 전',
                  status: 'info',
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        activity.status === 'success' ? 'default' : 'secondary'
                      }
                    >
                      {activity.status === 'success' ? '완료' : '진행중'}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>알림</CardTitle>
            <CardDescription>
              <Badge variant="destructive">3</Badge> 개의 새로운 알림이
              있습니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">시스템 업데이트</p>
                    <p className="text-xs text-muted-foreground">
                      새로운 기능이 추가되었습니다
                    </p>
                  </div>
                  <Badge variant="destructive">새글</Badge>
                </div>
              </div>

              <div className="rounded-lg border p-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">보안 알림</p>
                    <p className="text-xs text-muted-foreground">
                      비밀번호를 변경해주세요
                    </p>
                  </div>
                  <Badge variant="destructive">새글</Badge>
                </div>
              </div>

              <div className="rounded-lg border p-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">저장 공간 부족</p>
                    <p className="text-xs text-muted-foreground">
                      85% 사용 중입니다
                    </p>
                  </div>
                  <Badge variant="destructive">새글</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
