import React, { useState } from 'react'
import { Toast } from './Toast';
import Image from 'next/image';
import { Toggle } from './Toggle';

export const TextArea = ({textAreaError = false, ...props}) => {
  const {textAreaValue, isDecode, handleTextAreaChange, handleSwitchMode, isResultTextArea} = props

  const [toastVisible, setToastVisible] = useState(false)

  // console.log("Initial  isVisible:: "+isVisible)
  
  const swowToast = () => {
    console.log('executin showtoast')
    setToastVisible(true)
    setTimeout(() => {
      setToastVisible(false)
    }, 3000);
  }

  const handleCopyClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(textAreaValue);
      console.log('Texto copiado al portapapeles:', textAreaValue);
      swowToast()
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  };

  return (
    
    <div className="my-2" >      

      <div>
        <div className={`
        w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600`
        }>
          <div className={`px-4 py-2 rounded-t-lg ${textAreaError ? 'bg-gray-100 dark:bg-gray-500' : 'bg-white dark:bg-gray-800'}`}
          >
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea 
              disabled={textAreaError} 
              id="comment" 
              rows={4} 
              className={`
                w-full min-h-40 px-0 text-sm 
                text-gray-900  border-0  focus:ring-0 dark:text-white dark:placeholder-gray-400
                ${textAreaError ? 'font-thin bg-gray-100 dark:bg-gray-500' : 'bg-white dark:bg-gray-800'}
              `}
              placeholder="Write a text..."
              required 
              value={textAreaValue} 
              onChange={handleTextAreaChange} 
            />
          </div>
          {
            !isResultTextArea 
            ? 
            <div className="flex items-center justify-between px-2.5 py-2 border-t dark:border-gray-600">
              <button className="inline-flex items-center py-2.5 px-4 text-s font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-500">
                {
                  isDecode ? 'Decode' : 'Encode'
                }
              </button>
              <div className="flex items-center gap-4">
                <Toggle title={"Live"} />
                <button type="button" onClick={handleSwitchMode} className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <Image src="/icons/iconSwitch.svg" alt="switch" width={20} height={20} />
                </button>
                <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <Image src="/icons/iconPaste.svg" alt="paste" width={20} height={20} />
                </button>
              </div>
            </div>
            :
            <div className="flex items-center justify-between px-2.5 py-2 border-t dark:border-gray-600">
               <button 
                type="button" 
                disabled={textAreaError}
                onClick={handleCopyClick}
                className={`
                  inline-flex justify-center items-center p-2 rounded 
                  text-gray-500 dark:text-gray-400  
                  color-white
                  ${textAreaError ? 'hover:none' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer '}
              `}>
                <Image src="/icons/iconCopy.svg" alt="copy" width={20} height={20} />
              </button>

              <Toast visible={toastVisible}/>
            </div>
          }
        </div>
      </div>
      
    </div>
  )
}
