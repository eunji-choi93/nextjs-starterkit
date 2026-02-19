import Link from "next/link";
import { ArrowRight, Zap, Palette, Code2, Shield, Smartphone, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
} from 'simple-icons';
import { TechIcon } from '@/components/ui/tech-icon';

/**
 * 홈 페이지
 *
 * @description 스타터킷 소개 및 주요 기능을 보여주는 랜딩 페이지입니다.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header showMenuButton={false} />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="relative overflow-hidden">
          {/* 애니메이션 그라디언트 배경 */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient" />

          {/* 그리드 패턴 오버레이 */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in-up">
                모던 웹 스타터킷
              </h1>
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl animate-fade-in-up animation-delay-200">
                Next.js 16, TypeScript, Tailwind CSS, shadcn/ui로 구성된 프로덕션 레벨의
                <br />
                웹 애플리케이션 스타터킷입니다.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animation-delay-400">
                <Button asChild size="lg" className="h-14 px-8 text-lg">
                  <Link href="/dashboard">
                    시작하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 기능 섹션 */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">주요 기능</h2>
            <p className="text-muted-foreground">
              빠른 개발을 위한 모든 것이 준비되어 있습니다
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>빠른 시작</CardTitle>
                <CardDescription>
                  사전 설정된 레이아웃과 컴포넌트로 즉시 개발을 시작하세요
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Palette className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>다크모드</CardTitle>
                <CardDescription>
                  라이트/다크/시스템 테마를 지원하는 완벽한 다크모드
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>반응형 지원</CardTitle>
                <CardDescription>
                  모바일, 태블릿, 데스크톱 모든 기기에서 완벽하게 작동합니다
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Code2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>
                  타입 안정성과 자동완성을 제공하는 TypeScript 기본 설정
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>프로덕션 준비</CardTitle>
                <CardDescription>
                  베스트 프랙티스가 적용된 프로덕션 레벨 코드
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="container mx-auto px-4 py-16">
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">기술 스택</CardTitle>
              <CardDescription className="text-center">
                최신 웹 기술로 구성되었습니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <TechIcon icon={siNextdotjs} className="h-8 w-8" />
                  <div>
                    <p className="font-semibold">Next.js 16</p>
                    <p className="text-xs text-muted-foreground">App Router</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <TechIcon icon={siReact} className="h-8 w-8" />
                  <div>
                    <p className="font-semibold">React 19</p>
                    <p className="text-xs text-muted-foreground">최신 버전</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <TechIcon icon={siTypescript} className="h-8 w-8" />
                  <div>
                    <p className="font-semibold">TypeScript</p>
                    <p className="text-xs text-muted-foreground">타입 안정성</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <TechIcon icon={siTailwindcss} className="h-8 w-8" />
                  <div>
                    <p className="font-semibold">Tailwind CSS</p>
                    <p className="text-xs text-muted-foreground">유틸리티 우선</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <Palette className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">shadcn/ui</p>
                    <p className="text-xs text-muted-foreground">UI 컴포넌트</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-4">
                  <Feather className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Lucide Icons</p>
                    <p className="text-xs text-muted-foreground">아이콘 라이브러리</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
