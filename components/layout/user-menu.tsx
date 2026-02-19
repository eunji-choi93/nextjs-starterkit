'use client';

import { User, Settings, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * 사용자 메뉴 props
 */
interface UserMenuProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

/**
 * 사용자 메뉴 컴포넌트
 *
 * @description 아바타와 드롭다운 메뉴로 구성된 사용자 메뉴입니다.
 * 프로필, 설정, 로그아웃 메뉴를 제공합니다.
 *
 * @param user - 사용자 정보 (이름, 이메일, 아바타)
 */
export function UserMenu({ user }: UserMenuProps) {
  const defaultUser = {
    name: user?.name || '사용자',
    email: user?.email || 'user@example.com',
    avatar: user?.avatar,
  };

  // 이름의 첫 글자를 아바타 폴백으로 사용
  const initials = defaultUser.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-label="사용자 메뉴"
        >
          <Avatar>
            <AvatarImage src={defaultUser.avatar} alt={defaultUser.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{defaultUser.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {defaultUser.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>프로필</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>설정</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
