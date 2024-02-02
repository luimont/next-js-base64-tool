export const BackgroundContainer = () => {
  return (
    <>
      {
        // Este es el contenedor para background de Tailwind 
        //<div className="fixed left-0 top-0 -z-10 h-full w-full"> 
        //Este es el background de Tailwind 
          //<div className="relative h-full w-full bg-slate-950">
          //  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
          //</div>
        //</div> 
      }
  
      {/* Este es el contenedor para background de Tailwind */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {/* Este es el background de Tailwind */}
        <div className="
          h-screen w-screen bg-gradient-to-b 
          from-gray-200 via-blue-100 to-stone-100
          dark:from-[#385162] dark:via-[#1a4564] dark:to-[#112838] "
        />
      </div>
    </>
  )
}
