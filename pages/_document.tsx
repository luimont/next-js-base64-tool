import { BackgroundContainer } from "@/components/BackgroundContainer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 
        // eslint-disable-next-line @next/next/no-title-in-document-head */
        //<title>Base64 Tool</title>
        }
        <meta property="og:title" content="Base 64 Tool" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Decode/Encode simple & fast Base 64" />
        <meta property="og:image" content="/base64icon.png" />
      </Head>

      <body>
        
        <BackgroundContainer />
    
        <Header />
        <Main />
        <NextScript />
        <Footer />
        {/* <p>Esto es <code>_document.tsx</code></p> */}
      </body>
    </Html>
  );
}
