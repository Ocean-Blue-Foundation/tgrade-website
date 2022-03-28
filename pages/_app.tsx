import type { AppProps } from "next/app";
import GlobalWrapper from "../theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tgrade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalWrapper>
        <Component {...pageProps} />
      </GlobalWrapper>
    </>
  );
}

export default MyApp;
