'use client';
import { darkTheme, lightTheme } from '@/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const isDark = false;
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
