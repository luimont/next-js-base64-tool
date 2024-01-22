//Este es el 'Layout'
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <p>Layout de dashbnoar</p>
      <Component {...pageProps} />;
    </>
  )
}
