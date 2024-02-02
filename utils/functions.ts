
export const encodeBase64 = (text:string) => {
  const encodedText = btoa(text);
  return encodedText
};

export const decodeBase64 = (text:string) => {
  try {
    const decodedText = atob(text);
    return decodedText
  } catch (error) {
    return 'Error:Invalid_Base64'
  }
};

export const fixFormatCurrent = (rawString: string) => {
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

export const fixFormatJsonform = (rawString: string) => {
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
  //const jsonObjectString = `[${doubleBar}]`;
  const jsonObjectString = JSON.parse(`[${doubleBar}]`)
  //console.log('6s)' +jsonObjectString)

  return jsonObjectString;
};