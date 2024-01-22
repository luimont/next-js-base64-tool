import React, { FunctionComponentFactory, useState } from 'react'

// Definir el tipo para un objeto de secretos
type Secret = {
  name: string;
  value: { secret: string };
  description: string;
};

type SecretObject = {
  [key: string]: Secret;
};

type EditableItemProps = {
  secretInput: SecretObject[keyof SecretObject]; // Utilizamos keyof para extraer el tipo del valor de la propiedad
  setSecrets: React.Dispatch<React.SetStateAction<SecretObject>>;
};


export const EditableItem = ({...props}, secretInput:SecretObject) => {
  //console.log(`input-> ${JSON.stringify(secretInput)}`)
  //console.log(`object-> ${JSON.stringify(Object.values(secretInput)[0])}`)
  //console.log(`values: ${Object.values(secretInput)[0]}`)
  const secretObjectValues = Object.values(secretInput)[0] //Devuelve un arreglo que contiene todos los valores correspondientes a las propiedades enumerables de tipo cadena de texto pertenecientes a un objeto dado.
  const onlySecretValues = Object.values(secretObjectValues)[0]; 
  console.log(`secretObjectValues-> ${JSON.stringify(secretObjectValues)}`)
  console.log(`Object.values(secretObjectValues)[0]-> ${JSON.stringify(Object.values(secretObjectValues)[0])}`)

  const { name, value, description } =  JSON.parse(JSON.stringify(onlySecretValues))
  //const { name, value, description } = secretInput; //Devuelve un arreglo que contiene todos los valores correspondientes a las propiedades enumerables de tipo cadena de texto pertenecientes a un objeto dado.
  
  const [formData, setFormData] = useState({
    secretValue: value,
    secretDescription: description,
    editableSecret:false,
  })

  //const [value_s, setValue] = useState(value)
  //const [description_s, setDescription] = useState('description')

  console.log('state::', formData.secretValue)
  console.log('state::', formData.secretDescription)

  //const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log('event',event.target.value)
    //setDescription(event.target.value);
    //event.preventDefault()
  //};

  return (
    <div className='bg-blue-200 mb-4 p-4 rounded-xl w-[800px]'>
      <div className='mb-2 flex justify-between'>
        <p>name: {name}</p>
        <button 
          className='bg-blue-700 p-1 rounded-md text-white mx-2' 
          onClick={() => setFormData({...formData, editableSecret:!formData.editableSecret})}
        >
          { formData.editableSecret ? 'SAVE' : 'EDIT'}
        </button>
      </div>
      <div className='flex justify-between items-center mb-2'>
        <label htmlFor="value"> value: </label>
        <input 
          className={`w-full mx-2 ${formData.editableSecret ? 'bg-white' : 'bg-blue-200'}`}
          value={JSON.stringify(formData.secretValue)} 
          type="text" name="value" id="value" 
          readOnly={!formData.editableSecret} maxLength={60} minLength={4} 
          onChange={(e) => setFormData({...formData, secretValue: JSON.parse(e.target.value)})} 
        />
      </div>
      <div className='flex justify-between items-center'>
        <label htmlFor="description"> description: </label>
        <input 
          className={`w-full mx-2 ${formData.editableSecret ? 'bg-white' : 'bg-blue-200'}`}
          value={formData.secretDescription} 
          type="text" name="description" id="description" 
          readOnly={!formData.editableSecret} maxLength={60} minLength={4} 
          onChange={(e) => setFormData({...formData, secretDescription: e.target.value})} 
        />
      </div>
    </div>
  )
}
