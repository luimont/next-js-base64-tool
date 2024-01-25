import React, { useState } from 'react';
import { EditableItem } from './EditableItem';

// Definir el tipo para un objeto de secretos
type Secret = {
  name: string;
  value: { secret: string };
  description: string;
};

type SecretObject = {
  [key: string]: Secret;
};

const EditableSecretList = () => {
  // Secretos
  const [secrets, setSecrets] = useState<SecretObject[]>([
    {
      secret_s8: {
        name: 's8',
        value: { secret: 'tesdfsdfte'},
        description: 'Secrets for s8 Database'
      }
    },
    {
      secret_myapi: {
        name: 'myapi',
        value: { secret: 'tetsdfsdfe'},
        description: 'Secrets for myApi'
      }
    },
    {
      secret_s10: {
        name: 's10',
        value: { secret: 'dfsdfsdf'},
        description: 'Secrets for s10 Database'
      }
    }
  ]);

  // Mostrar la lista de secretos
  return (
    <>
      <div className="flex flex-col my-8">
        <h2 className='text-l font-semibold m-8 max-w-xl'><em>Tool to manage List Secrets, simply you paste the Base64 and it generate a List for all secrets that you can edit and save</em></h2>
        <textarea placeholder="Paste here the Secret List in Base64" className="border-gray-300 border-2"/>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white rounded-md p-2 my-2 w-full">Get Secrets</button>
          <button className="bg-gray-400 text-white rounded-md p-2 my-2 w-40">Clear Text</button>
        </div>
      </div>
      {console.log(`cgl: ${JSON.stringify(Object.values(secrets))}`)}
      {
        Object.values(secrets).map(
          (secretItem:SecretObject, index) => (
            <EditableItem 
              secretInput={secretItem} 
              setSecrets={setSecrets}
              key={index} 
            />
          )
        )
      }
      {
        <div>
          <p>Current Secrets List</p>
          <pre>
            {JSON.stringify(secrets, null, 2)}
          </pre>
        </div>
      }
    </>
  )
}

export default EditableSecretList;