import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/animations.css';
import NavbarComponent from '@/components/Navbar';
import { GlobalContainer } from '@/components/Layout';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContainer>
      <NavbarComponent />
      <Component {...pageProps} />
      <Footer />
    </GlobalContainer>
  );
}
