import '@/styles/globals.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

const lightTheme = createTheme({ type: 'light' });
const darkTheme = createTheme({ type: 'dark' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}
