import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import HeadComponent from '../components/Head';
import { CommandMenuProvider } from '../hooks/useCommandMenu';
import { MobileMenuProvider } from '../hooks/useMobileMenu';
import Layout from '../layouts/Layout';
import { globalStyles } from '../styles/global';

import 'react-toastify/dist/ReactToastify.css';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileMenuProvider>
      <HeadComponent
        title="LeonneBrito"
        description="Construindo aplicações web de alto desempenho e com foco na experiência do usuário."
        image="https://avatars.githubusercontent.com/u/73369138?v=4"
      />
      <Script
        id="Facebook Pixel"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '504450094944793');
              fbq('track', 'PageView');
            `
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HJJY8SLCLZ"
      />
      <Script
        id="Google Analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HJJY8SLCLZ');
          `
        }}
      />
      <CommandMenuProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
        <ToastContainer />
      </CommandMenuProvider>
    </MobileMenuProvider>
  );
}
