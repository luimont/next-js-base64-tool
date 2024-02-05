//import { secret_decoded } from '@/mocks/secrets'

import { decodeBase64, encodeBase64, fixFormatJsonform } from '@/utils/functions'
import { useEffect, useState } from 'react'
import { Tabs } from './Tabs'
import { TextArea } from './TextArea'

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

//const decoded = String.raw`{ \\"name\\" : \\"mddd\\", \\"value\\" : { \\"secret\\": \\"fdfdfdsfsdfsddfs==\\" }, \\"description\\" : \\"Secrets for Database\\"}, { \\"name\\" : \\"s7\\", \\"value\\" : { \\"secret\\": \\"ffdsfsd+fdfsdfsdfsd==\\" }, \\"description\\" : \\"Secrets for Database\\"}`
const decoded = String.raw`This is an example of text that can be base64 encoded and decoded: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris ac justo fringilla malesuada. Vestibulum tincidunt tortor eget bibendum bibendum`


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
  const [isDecode, setDecode] = useState(false)
  const [liveMode, setLiveMode] = useState(true)

  const [prettyJson, setPrettyJson] = useState('none') // 'none', 'json', 'doublebarjson'

  const DecodeText = () => {
    const textDecoded = decodeBase64(textAreaInput)
    const errorDecodeBase64 = textDecoded == 'Error:Invalid_Base64'

    if (errorDecodeBase64)
      setTextOutput({text:'Invalid Base 64', isError:true})
    else
      setTextOutput({text:textDecoded, isError:false})
  }

  const EncodeText = () => {
    const textEncoded = encodeBase64(textAreaInput)
    setTextOutput({isError:false, text:textEncoded})
  }

  useEffect(() => {
    if(liveMode){
      if(isDecode) {
        DecodeText()
      }
      else {
        EncodeText()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[textAreaInput, isDecode, liveMode])


  const handleTextAreaInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const handleDecodeClick = () => {
    DecodeText()
  };
  const handleEncodeClick = () => {
    EncodeText()
  };


  return (
    <section className='flex flex-col'>

      <Tabs isDecode={isDecode} handleSetDecodeMode={handleSetDecodeMode} handleSetEncodeMode={handleSetEncodeMode}/>

      <TextArea 
        textAreaValue={textAreaInput} 
        textAreaError={false}
        isDecode={isDecode} 
        setDecode={setDecode} 
        liveMode={liveMode}
        setLiveMode={setLiveMode}
        handleDecodeClick={handleDecodeClick}
        handleEncodeClick={handleEncodeClick}
        handleTextAreaChange={handleTextAreaInputChange} 
        setTextAreaInput={setTextAreaInput}
        handleSwitchMode={handleSwitchMode} 
      />
     
      <TextArea 
        isResultTextArea={true} 
        textAreaValue={textOutput.text} 
        textAreaError={textOutput.isError}
        isDecode={isDecode} 
        setDecode={setDecode} 
        handleTextAreaChange={handleTextAreaOutputChange} 
        handleSwitchMode={handleSwitchMode} 
      />

      {/* 
        <h3>Visualization</h3>  
        <div className='flex gap-2'>
          <button className="text-white rounded-md p-2 my-2" onClick={() => setPrettyJson('none')}>Raw</button>
          <button className="text-white rounded-md p-2 my-2" onClick={() => setPrettyJson('json')}>Format Pretty JSON</button>
          <button className="text-white rounded-md p-2 my-2" onClick={() => setPrettyJson('doublebarjson')}>DoubleBar Pretty JSON</button>
        </div> 
      */}

      
      
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
