import type { AppProps } from "next/app";
import GlobalWrapper from "../theme";
import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;800;900&family=Montserrat:wght@300;400;500;600;800;900&display=swap" />
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
