"use client"

import { IconMoon } from "@/icons/IconMoon";
import { IconSun } from "@/icons/IconSun";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

  //const isClient = typeof window !== 'undefined';
  //console.log('Ejecuntando en Cliente?',isClient)
  
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if(!mounted) return (
      <>
        {/* 
          El Theme aún no se conoce xq este componente se ejecuta del lado del cliente (luego de la ejecución del SSR) 
        */}
      </>
  )
  
  else return (
    <div className="absolute top-4 right-4">
      {
        resolvedTheme === 'dark' 
        ? 
          <button onClick={() => setTheme('light')} className="bg-transparent">
            <IconSun />
          </button>

        :
        <button onClick={() => setTheme('dark')} className="bg-transparent">
          <IconMoon className="stroke-gray-500"/>
        </button>
      }
    </div>
  )


  /*if (resolvedTheme === 'dark') {
    return (
      <button onClick={() => setTheme('light')} className="bg-transparent">
        <IconSun />
      </button>
    )
  }
  
  else if (resolvedTheme === 'light') {
    return (
      <div className="absolute top-4 right-4">
        <button onClick={() => setTheme('dark')} className="bg-transparent">
          <IconMoon />
        </button>
      </div>
    )
  }*/

}
