/* Este archivo "_app.tsx" es el componente LAYOUT */

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Providers } from "./Provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
