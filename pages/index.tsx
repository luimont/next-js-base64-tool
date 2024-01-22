//import { useState } from "react";
//import { EncoderDecoder } from "@/components/EncoderDecoder"; 
//import { DecodedList } from "@/components/DecodedList";
import EditableSecretList from "@/components/EditableSecretList";

const index = () => {

  return (
    <main>
      {/* <EncoderDecoder /> */}
      {/* <DecodedList /> */}
      <div className="flex flex-col my-8">
        <textarea placeholder="Paste here the Secret List in Base64" className="border-gray-300 border-2"/>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white rounded-md p-2 my-2 w-full">Get Secrets</button>
          <button className="bg-gray-400 text-white rounded-md p-2 my-2 w-40">Clear Text</button>
        </div>
      </div>
      < EditableSecretList />
      <div >
        <button className="bg-blue-600 text-white rounded-md p-2">Generate Base64</button>
        <button className="bg-blue-600 text-white rounded-md p-2">Generate JSON</button>
      </div>
    </main>
  )
}

export default index