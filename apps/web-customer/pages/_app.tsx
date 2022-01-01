import { AppProps } from 'next/app';
import Head from 'next/head';
import './index.css';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Welcome to web-customer!</title>
    </Head>
    <main className="">
      <Component {...pageProps} />
    </main>
  </>
);

export default CustomApp;
