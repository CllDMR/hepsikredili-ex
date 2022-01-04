import { AppProps } from 'next/app';
import Head from 'next/head';
import './index.css';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Hepsikredili.com</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default CustomApp;
