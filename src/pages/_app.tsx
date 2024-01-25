
import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'


import { Container } from '../styles/pages/app';
import { HeaderComponent } from '@/components/Header';
import { CartContextProvider } from '@/components/context/CartContext';

globalStyles();



export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartContextProvider>
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>

  )
}
