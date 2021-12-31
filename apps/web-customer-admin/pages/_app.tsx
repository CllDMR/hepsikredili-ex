import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Welcome to web-customer-admin!</title>
    </Head>
    <main className="">
      <Component {...pageProps} />
    </main>
  </>
);

export default CustomApp;
