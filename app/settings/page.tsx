'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

/**
 * 설정 페이지
 *
 * @description 사용자 프로필, 알림, 보안 설정을 관리하는 페이지입니다.
 */
export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div className="space-y-6">
      {/* 페이지 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">
          계정 및 애플리케이션 설정을 관리하세요
        </p>
      </div>

      {/* 프로필 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>
            공개 프로필 정보를 업데이트하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              이름
            </label>
            <Input id="name" placeholder="홍길동" defaultValue="사용자" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              이메일
            </label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              defaultValue="user@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">
              소개
            </label>
            <Input
              id="bio"
              placeholder="자기소개를 입력하세요"
            />
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button>프로필 저장</Button>
          </div>
        </CardContent>
      </Card>

      {/* 알림 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>
            알림 수신 방법을 설정하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label
                htmlFor="email-notifications"
                className="text-sm font-medium"
              >
                이메일 알림
              </label>
              <p className="text-sm text-muted-foreground">
                중요한 업데이트를 이메일로 받습니다
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
              aria-label="이메일 알림 토글"
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label
                htmlFor="push-notifications"
                className="text-sm font-medium"
              >
                푸시 알림
              </label>
              <p className="text-sm text-muted-foreground">
                브라우저에서 푸시 알림을 받습니다
              </p>
            </div>
            <Switch
              id="push-notifications"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
              aria-label="푸시 알림 토글"
            />
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button>알림 설정 저장</Button>
          </div>
        </CardContent>
      </Card>

      {/* 보안 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>보안</CardTitle>
          <CardDescription>
            계정 보안 설정을 관리하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="current-password" className="text-sm font-medium">
              현재 비밀번호
            </label>
            <Input id="current-password" type="password" />
          </div>

          <div className="space-y-2">
            <label htmlFor="new-password" className="text-sm font-medium">
              새 비밀번호
            </label>
            <Input id="new-password" type="password" />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm-password" className="text-sm font-medium">
              비밀번호 확인
            </label>
            <Input id="confirm-password" type="password" />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label
                htmlFor="two-factor-auth"
                className="text-sm font-medium"
              >
                2단계 인증
              </label>
              <p className="text-sm text-muted-foreground">
                추가 보안 레이어를 활성화합니다
              </p>
            </div>
            <Switch
              id="two-factor-auth"
              checked={twoFactorAuth}
              onCheckedChange={setTwoFactorAuth}
              aria-label="2단계 인증 토글"
            />
          </div>

          <Separator />

          <div className="flex justify-end gap-2">
            <Button variant="outline">취소</Button>
            <Button>보안 설정 저장</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
