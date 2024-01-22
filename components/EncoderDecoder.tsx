import { secret_decoded, secret_encoded } from '@/mocks/secrets';
import React, { useState } from 'react'

export const EncoderDecoder = () => {
  const [inputText, setInputText] = useState(secret_decoded);
  const [outputText, setOutputText] = useState('');

  const encodeBase64 = () => {
    const encodedText = btoa(inputText);
    setOutputText(encodedText);
  };

  const decodeBase64 = () => {
    try {
      const decodedText = atob(inputText);
      setOutputText(decodedText);
    } catch (error) {
      setOutputText('Entrada Base64 no válida');
    }
  };

  return (
    <div className='flex flex-col items-center bg-gray-300'>
  
      <h1 className='text-blue-950 text-xl m-6'>Base64 Encoder/Decoder</h1>
      
      <div>
        <label>
          Entrada:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
      </div>

      <div className='flex justify-center items-center  gap-2 m-4'>
        <button className='bg-blue-500 p-2 rounded-xl text-white' onClick={encodeBase64}>Codificar</button>
        <button className='bg-blue-500 p-2 rounded-xl text-white' onClick={decodeBase64}>Decodificar</button>
      </div>

      <div className='flex flex-col w-full p-10'>
        <label>
          Salida:
          <textarea value={outputText} className='w-full min-h-[350px]' />
        </label>
      </div>
    </div>
  )
}
