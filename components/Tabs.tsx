
export const Tabs = ({...props}) => {
  const {isDecode, handleSetDecodeMode, handleSetEncodeMode} = props
  return (
    <div className='flex flex-col'>
      <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">Select your country</label>
          <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Encode</option>
              <option>Decode</option>
          </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        
        <li className="w-full" onClick={handleSetEncodeMode}>
          <span className={`
              cursor-pointer 
              inline-block 
              w-full p-4 rounded-tl-lg
              ${ 
                !isDecode 
                  ? "text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                  : "text-gray-900/40 dark:text-gray-300/40 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              }
            `}
          >
            Base 64 Encode
          </span>
        </li>

        <li className="w-full" onClick={handleSetDecodeMode}>
          <span className={`
            cursor-pointer 
            inline-block 
            w-full p-4 rounded-tr-lg
            ${ 
              isDecode 
                ? "text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                : "text-gray-900/40 dark:text-gray-300/40 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        }
          `}
            aria-current="page"
          >
            Base 64 Decode 
          </span>
        </li>
        
      </ul>
    </div>
  )
}


