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