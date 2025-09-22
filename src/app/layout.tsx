import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/config/clientLayout';
export const metadata: Metadata = {
  title: '감사 일기 모음장',
  description: '감사 일기를 쓰고, 다른 사람의 감사 일기를 구경해보아요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <ClientLayout>
        <body>{children}</body>
      </ClientLayout>
    </html>
  );
}
