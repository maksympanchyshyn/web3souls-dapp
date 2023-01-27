import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider, createTheme } from '@nextui-org/react';

import '@/styles/globals.css';
import NavbarComponent from '@/components/Navbar';

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
        <NavbarComponent />
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}
