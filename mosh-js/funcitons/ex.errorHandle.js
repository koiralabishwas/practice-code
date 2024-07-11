
function countElement (array , searchElement) {
  if (!Array.isArray(array))
    throw new Error('invalid array')
  return array.reduce((previousValue , currentValue ) => {
    const occurance = (currentValue === searchElement) ? 1 : 0
    return previousValue + occurance
  },0 )
}

try {
const numbers = [1 ,2 ,3,4 ,1]
  const count = countElement(1 , 1)
  console.log(count)
  
} catch (error) {
  console.log(error.message)
}