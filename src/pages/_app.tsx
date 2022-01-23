import { useState } from 'react';
import dynamic from 'next/dynamic';
import { GlobalStyle } from '../styles/globals';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [showMenuMob, setShowMenuMob] = useState<boolean>(false);

  const HeaderDynamic = dynamic(() => import('../components/Header'), 
  { ssr: false }
  );
  const HeaderMobileDynamic = dynamic(() => import('../components/HeaderMobile'),
    { ssr: false }
  );
  const handleShowMenuMob = () => {
    setShowMenuMob(!showMenuMob);
  }
  return (
    <>
      <HeaderDynamic />
      <HeaderMobileDynamic isMenuActive={showMenuMob} handleHeaderMenu={handleShowMenuMob} />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
