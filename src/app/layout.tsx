import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "독고탁 에이젼시 2.0",
  description: "기존 상세페이지 이미지와 PDF를 분석해 전환율 중심 9:16 상세페이지 섹션 이미지로 리디자인하는 AI 에이젼시 도구입니다.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
