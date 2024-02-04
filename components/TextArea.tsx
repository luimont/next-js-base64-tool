import { useRef, useState } from 'react'
import { Toast } from './Toast';
import { Toggle } from './Toggle';
import { IconCopy } from '@/icons/IconCopy';
import { IconSwitch } from '@/icons/IconSwitch';
import { IconPaste } from '@/icons/IconPaste';
import { IconX } from '@/icons/IconX';

export const TextArea = ({ ...props}) => {
  const {
    textAreaValue, 
    isDecode, 
    handleTextAreaChange, 
    setTextAreaInput, 
    handleSwitchMode, 
    isResultTextArea, 
    liveMode, 
    setLiveMode, 
    handleDecodeClick, 
    handleEncodeClick, 
    textAreaError = false
  } = props

  const [toastVisible, setToastVisible] = useState(false)

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
      //console.log('Texto copiado al portapapeles:', textAreaValue);
      swowToast()
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  };

  // Esto es para indicar a que elemento quiero pegar el texto desde el portapapeles
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePasteButtonClick = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      // Asignar el texto del portapapeles al textarea
      //console.log(clipboardText)
      if (textareaRef.current) {
        textareaRef.current.value = clipboardText;
        setTextAreaInput(clipboardText)
      }
    });
  };

  const handleClearClick = () => {
    setTextAreaInput('')
  };
  
  const handleLiveMode = (value: boolean) => {
    console.log('handleLiveMode'+value)
  };


  return (
    
    <div className="mb-2" >      

      <div>
        <div className={`
          w-full mb-4 border border-gray-200 
          bg-gray-50 dark:bg-gray-700 dark:border-gray-600
          ${isResultTextArea ? 'rounded-lg' :'rounded-b-lg'}
        `}>
          <div className={`
            px-4 py-2
            ${isResultTextArea ? 'rounded-lg' :'rounded-b-lg'}
            ${textAreaError ? 'bg-gray-100 dark:bg-gray-500' : 'bg-white dark:bg-gray-800'}
          `}>
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              ref={isResultTextArea ? null : textareaRef}
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
              <div className="flex items-center gap-2">
                <button 
                  type="button" 
                  onClick={handlePasteButtonClick} 
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <IconPaste />
                </button>
                <button type="button" onClick={handleSwitchMode} className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <IconSwitch />
                </button>
                <button 
                  type="button" 
                  onClick={handleClearClick} 
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <IconX />
                </button>
                <Toggle title={"Live"} liveMode={liveMode} setLiveMode={setLiveMode}/>
              </div>
              <button 
                disabled={liveMode}
                onClick={isDecode ? handleDecodeClick : handleEncodeClick }
                className={`
                  inline-flex items-center py-2.5 px-4 text-s font-medium text-center 
                  rounded-lg focus:ring-4 focus:ring-blue-200
                  ${liveMode ? 'bg-blue-700/30 text-white dark:text-gray-500' : 'text-white bg-blue-700'}
                  dark:focus:ring-blue-900 hover:bg-blue-500"
                `}
              >
                {
                  isDecode ? 'Decode' : 'Encode'
                }
              </button>
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
                  ${textAreaError ? 'hover:none' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer '}
              `}>
                <IconCopy className='w-6 h-6'/>
              </button>

              <Toast visible={toastVisible}/>
            </div>
          }
        </div>
      </div>
      
    </div>
  )
}
