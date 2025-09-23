'use client';
import { darkTheme, lightTheme } from '@/styles/theme';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

export const queryClient = new QueryClient({});

export default function ClientLayout({ children }: { children: ReactNode }) {
  const isDark = false;

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
