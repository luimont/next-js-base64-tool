/* Este archivo "_app.tsx" es el componente LAYOUT */

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "./Provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
