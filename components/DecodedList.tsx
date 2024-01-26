//import { secret_decoded } from '@/mocks/secrets'

import { decodeBase64, encodeBase64, fixFormatJsonform } from '@/utils/functions'
import React, { useEffect, useState } from 'react'
import { Tabs } from './Tabs'

const secrets_list_current = String.raw`
  secret_s8={name=\\"s8\\", value={ \\"secret\\": \\"uyiyu/ZkVoP3pHKjZhaSOF9QUk9EIn0=\\" }, description=\\"Secrets for s8 Database\\"}, 
  secret_myapi={name= \\"myapi\\", value={ \\"secret\\": \\"eyJQSV9VUXSc+eEZwQyJ9\\" }, description=\\"Secrets for myApi \\"}, 
  secret_s10={name=\\"s10\\", value={ \\"secret\\": \\"eyJ1cFwcm9kIiwgInBhc3N3b3JkIjogImjencyZXkwEwX1BST0QifQ==\\" }, description=\\"Secrets for s10 Database\\"},
`

const secrets_list_jsonform = String.raw`
{"secret_s8":{"name":\\"s8\\", "value":{ \\"secret\\": \\"uyiyu/ZkVoP3pHKjZhaSOF9QUk9EIn0=\\" }, "description":\\"Secrets for s8 Database\\"}}, 
{"secret_myapi":{"name": \\"myapi\\", "value":{ \\"secret\\": \\"eyJQSV9VUXSc+eEZwQyJ9\\" }, "description":\\"Secrets for myApi \\"}}, 
{"secret_s10":{"name":\\"s10\\", "value":{ \\"secret\\": \\"eyJ1cFwcm9kIiwgInBhc3N3b3JkIjogImjencyZXkwEwX1BST0QifQ==\\" }, "description":\\"Secrets for s10 Database\\"}}
`

const decoded = String.raw`{ \\"name\\" : \\"mddd\\", \\"value\\" : { \\"secret\\": \\"fdfdfdsfsdfsddfs==\\" }, \\"description\\" : \\"Secrets for Database\\"}, { \\"name\\" : \\"s7\\", \\"value\\" : { \\"secret\\": \\"ffdsfsd+fdfsdfsdfsd==\\" }, \\"description\\" : \\"Secrets for Database\\"}`

const text_example_input = "Tool to manage List Secrets, simply you paste the Base64 and it generate a List for all secrets that you can edit and save"



export const DecodedList = () => {

  const examp: SecretObject[] = [
    {
      secret_s8: {
        name: 's8',
        value: { secret: 'tes456df456sdf456456te'},
        description: 'Secrets for s8 Database'
      }
    },
    {
      secret_myapi: {
        name: 'myapi',
        value: { secret: 'tet546s456df456sdfe456'},
        description: 'Secrets for myApi'
      }
    },
    {
      secret_s10: {
        name: 's10',
        value: { secret: 'd645f645sdf456s645df'},
        description: 'Secrets for s10 Database'
      }
    }
  ]



  const [textAreaInput, setTextAreaInput] = useState(decoded)
  const [textOutput, setTextOutput] = useState({
    text:'',
    isError: false
  })
  const [isDecode, setDecode] = useState(true)
  const [prettyJson, setPrettyJson] = useState('none') // 'none', 'json', 'doublebarjson'


  useEffect(() => {
    if(isDecode) {
      const textDecoded = decodeBase64(textAreaInput)
      setTextOutput({...textOutput, text:textDecoded})
    }
    else {
      const textEncoded = encodeBase64(textAreaInput)
      setTextOutput({...textOutput, text:textEncoded})
    }
  },[textAreaInput, isDecode])

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaInput(event.target.value);
  };

  const handleTextAreaOutputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextOutput({...textOutput, text:event.target.value});
  };

  const handleSwitchMode = () => {
    const aux = textAreaInput
    setTextAreaInput(textOutput.text)
    setTextOutput({...textOutput,text:aux})
    setDecode(!isDecode)
  }

  const handleSetDecodeMode = () => {
    if(isDecode) return
    setDecode(!isDecode)
  }

  const handleSetEncodeMode = () => {
    if(!isDecode) return
    setDecode(!isDecode)
  }

  return (
    <section className='flex flex-col'>

      <Tabs isDecode={isDecode} handleSetDecodeMode={handleSetDecodeMode} handleSetEncodeMode={handleSetEncodeMode}/>
      <div className="flex flex-col my-8 ">
        <textarea 
          placeholder="Paste here the Secret List in Base64"
          value={textAreaInput} 
          onChange={handleTextAreaChange} 
          className="border-gray-300 border-2 min-h-60 rounded-md p-2"
        />
        <div className="flex gap-2">
          {
            isDecode 
            ? <button className="text-white rounded-md p-2 my-2 w-full" onClick={() => setDecode(true)}>Decode</button>
            : <button className="text-white rounded-md p-2 my-2 w-full" onClick={() => setDecode(false)}>Encode</button>
          }
          <button className="text-white rounded-md p-2 my-2" onClick={handleSwitchMode}>Switch</button>
        </div>
      </div>

      <textarea 
        placeholder="Result"
        value={
          //prettyJson === 'none' 
          //  ? 
            textOutput.text
            //: prettyJson === 'json' 
            //  ? JSON.stringify(textOutput, null, 2)
            //  : JSON.stringify(fixFormatJsonform(textOutput), null, 2)
        }
        onChange={handleTextAreaOutputChange}
        className="border-gray-300 border-2 min-h-60 rounded-md p-2"
      />      

      <h3>Visualization</h3>  
      <div className='flex gap-2'>
        <button className="text-white rounded-md p-2 my-2" onClick={() => setPrettyJson('none')}>Raw</button>
        <button className="text-white rounded-md p-2 my-2" onClick={() => setPrettyJson('json')}>Format Pretty JSON</button>
        <button className="text-white rounded-md p-2 my-2" onClick={() => setPrettyJson('doublebarjson')}>DoubleBar Pretty JSON</button>
      </div>

      <pre className="w-80 bg-red-200">
        {
          /*prettyJson === 'none' 
            ? JSON.stringify(textOutput, null, 2)
            : prettyJson === 'json' 
              ? JSON.stringify(textOutput, null, 2)
              : JSON.stringify(fixFormatJsonform(textOutput), null, 2)*/
        }
      </pre>
    </section>

  )
}
