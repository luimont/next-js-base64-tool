import { Header } from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      
      <body>
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
