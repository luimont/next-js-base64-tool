'use client'

import { ThemeProvider } from "next-themes"

export const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    /* Este provider es necesario para evitar el parpadeo al recargar la pagina y obtener el tema */
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
