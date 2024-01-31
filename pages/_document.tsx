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

      {/* Este es el contenedor para background de Tailwind */}
      {/* <div className="fixed left-0 top-0 -z-10 h-full w-full"> */}
        {/* Este es el background de Tailwind */}
        <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
      {/* </div> */}
        
        {/* Este es el contenedor para background de Tailwind */}
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          
          {/* Este es el background de Tailwind */}
          <div className="h-screen w-screen bg-gradient-to-b from-gray-200 via-blue-100 to-stone-100" />
        
        </div>

        <Header />
        <Main />
        <NextScript />
        <footer className="py-10 flex justify-center">
          <p>Aqui el Footer</p>
        </footer>
        {/* <p>Esto es <code>_document.tsx</code></p> */}
      </body>
    </Html>
  );
}
