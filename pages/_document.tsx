import { BackgroundContainer } from "@/components/BackgroundContainer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {
        // eslint-disable-next-line @next/next/no-title-in-document-head
        //<title>Base64 Tool</title>
        }
        <meta property="og:title" content="Base 64 Tool" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Decode/Encode simple & fast Base 64" />
        <meta property="og:image" content="/base64icon.png" />
        <meta name="description" content="Discover a powerful tool that allows you to efficiently Encode and Decode data between Base 64 representations and raw text." />
        <link rel="icon" href="/base64icon.png" sizes="any" />
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
