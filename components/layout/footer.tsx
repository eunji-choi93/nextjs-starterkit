import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

/**
 * 푸터 컴포넌트 props
 */
interface FooterProps {
  className?: string;
}

/**
 * 푸터 컴포넌트
 *
 * @description 페이지 하단 푸터입니다.
 * 회사 정보, 링크, SNS 아이콘을 포함합니다.
 *
 * @param className - 추가 CSS 클래스
 */
export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t bg-background', className)}>
      <div className="container px-4 py-8">
        <Separator className="mb-8" />

        {/* 3단 그리드 레이아웃 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 회사 정보 */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-bold">M</span>
              </div>
              <span className="font-bold">모던 웹 스타터킷</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next.js 16 기반의 모던 웹 애플리케이션 스타터킷입니다.
              빠르게 프로덕션 레벨의 웹 앱을 개발하세요.
            </p>
          </div>

          {/* 링크 섹션 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">링크</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-foreground transition-colors"
                >
                  대시보드
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings"
                  className="hover:text-foreground transition-colors"
                >
                  설정
                </Link>
              </li>
              <li>
                <Link
                  href="https://nextjs.org/docs"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  문서
                </Link>
              </li>
            </ul>
          </div>

          {/* SNS 섹션 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">소셜 미디어</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 저작권 정보 */}
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 모던 웹 스타터킷. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
