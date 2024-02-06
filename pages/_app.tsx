/* Este archivo "_app.tsx" es el componente LAYOUT */

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import  Provider from "./Provider"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <title>Base 64 Tool</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
