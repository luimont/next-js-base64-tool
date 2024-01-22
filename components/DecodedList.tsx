//import { secret_decoded } from '@/mocks/secrets'
import React, { useState } from 'react'

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

type SecretObject = {
  [key: string]: {
    name: string;
    value: { secret: string };
    description: string;
  };
};

export const DecodedList = () => {

  const fixFormatCurrent = (rawString: string) => {
    // Agregar comillas dobles a los nombres de secretos usando expresiones regulares
    const formattedSecretsList = rawString.replace(/(secret_[^\s=]+)/g, '\n{"$1"');
    console.log('1)' +formattedSecretsList)

    // Remover saltos de línea y espacios adicionales
    //const cleanedString = formattedSecretsList.replace(/\s+/g, '');
    //console.log('2)' +cleanedString)

    const formattedKeyEndLine = formattedSecretsList.replace(/}, \n/g, '}},\n');
    console.log('2)' +formattedKeyEndLine)

    // Remover doble barra
    const doubleBar = formattedKeyEndLine.replace(/\\/g, '')//.replace(/=/g, ':');
    console.log('3)' +doubleBar)

    // Agregar comillas para name, value y description
    const removeCuotes = doubleBar.replace(/name=/g, '"name":').replace(/value=/g, '"value":').replace(/description=/g, '"description":')//.replace(/=/g, ':');
    console.log('4)' +removeCuotes)

    // Reemplazar = con :
    const jsonString = removeCuotes.replace(/"=/g, '":');
    console.log('5)' +jsonString)
  
    // Agregar llaves alrededor de la cadena para formar un objeto JSON
    const jsonObjectString = `{"list":[${jsonString}}]}`;
    console.log('6)' +jsonObjectString)
  
    return jsonObjectString;
  };

  const fixFormatJsonform = (rawString: string) => {
    // Agregar comillas dobles a los nombres de secretos usando expresiones regulares
    //const formattedSecretsList = rawString.replace(/(secret_[^\s=]+)/g, '\n{"$1"');
    //console.log('1)' +formattedSecretsList)

    // Remover saltos de línea y espacios adicionales
    //const cleanedString = formattedSecretsList.replace(/\s+/g, '');
    //console.log('2)' +cleanedString)

    //const formattedKeyEndLine = formattedSecretsList.replace(/}, \n/g, '}},\n');
    //console.log('2)' +formattedKeyEndLine)

    // Remover doble barra
    const doubleBar = rawString.replace(/\\/g, '')//.replace(/=/g, ':');
    console.log('3s)' +doubleBar)

    // Agregar comillas para name, value y description
    //const removeCuotes = doubleBar.replace(/name=/g, '"name":').replace(/value=/g, '"value":').replace(/description=/g, '"description":')//.replace(/=/g, ':');
    //console.log('4)' +removeCuotes)

    // Reemplazar = con :
    //const jsonString = removeCuotes.replace(/"=/g, '":');
    //console.log('5)' +jsonString)
  
    // Agregar llaves alrededor de la cadena para formar un objeto JSON
    const jsonObjectString = `[${doubleBar}]`;
    console.log('6s)' +jsonObjectString)
  
    return jsonObjectString;
  };

  //const formattedJsonCurr = fixFormatCurrent(secrets_list_current);

  const formattedJsonForm = fixFormatJsonform(secrets_list_jsonform);

  // Convertir la cadena a un objeto JSON
  const secretsObject = JSON.parse(formattedJsonForm);
  console.log(secretsObject);

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


  // Iterar sobre las propiedades del objeto
  //for (const key in secretsObject) {
  //  if (secretsObject.hasOwnProperty(key)) {
  //    const secret = secretsObject[key];

  //    // Crear un elemento <p> para cada secreto y agregarlo al cuerpo del documento
  //    const pElement = document.createElement("p");
  //    pElement.textContent = `${secret.name}: ${secret.value.secret} - ${secret.description}`;
  //    document.body.appendChild(pElement);
  //  }
  //}

  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Manejar cambios en la selección
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>

      <label htmlFor="dropdown">Selecciona un secreto:</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Elige un secreto --</option>
        {examp.map((secretObject, index) => {
          const secretName = Object.keys(secretObject)[0];
          const secretDetails = secretObject[secretName];

          return (
            <option key={index} value={secretName}>
              {secretDetails.description}
            </option>
          );
        })}
      </select>

      {/* Mostrar el valor seleccionado */}
      {selectedOption && (
        <div>
          <p>Has seleccionado el secreto: {selectedOption}</p>
          {examp.find((s) => Object.keys(s)[0] === selectedOption)?.[selectedOption] && (
            <p>Descripción: {examp.find((s) => Object.keys(s)[0] === selectedOption)![selectedOption]?.description}</p>
          )}
        </div>
      )}

    </div>

  )
}
