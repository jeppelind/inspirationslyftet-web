import { Inter, Lora, Playfair_Display } from '@next/font/google';
import '../styles/custom.scss';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] });
const playfairItalic = Playfair_Display({ subsets: ['latin'], style: 'italic' });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const headerItalic = playfairItalic.className;
export const headerNormal = playfair.className;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
