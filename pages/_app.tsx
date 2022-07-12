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
        <meta property="twitter:title" content="The Big Bang of Regulated Blockchain" />

        <meta property="description" content="Business solving real-world problems." />
        <meta property="og:description" content="Business solving real-world problems." />
        <meta name="twitter:description" content="Business solving real-world problems." />
        <meta name="twitter:card" property="twitter:card" content="summary_large_image" />

        <meta property="og:image" content="/post-img.png" />
        <meta name="twitter:image" property="twitter:image" content="/post-img.png" />
      </Head>
      <GlobalWrapper>
        <Component {...pageProps} />
      </GlobalWrapper>
    </>
  );
}

export default MyApp;
