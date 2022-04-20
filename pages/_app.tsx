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
        <meta property="og:title" content="The Big Bang of Regulated Blockchain" />
        <meta
          property="og:description"
          content="Our vision is for self-sovereign groups, bound by their local jurisdiction and regulations, trading P2P programmable financial instruments."
        />
        <meta property="og:image" content="/main-bg.jpg" />
      </Head>
      <GlobalWrapper>
        <Component {...pageProps} />
      </GlobalWrapper>
    </>
  );
}

export default MyApp;
