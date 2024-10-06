export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [];
  for (const [idx, value] of array.entries()) {
    resultArray[idx] = appendString + value; // Use resultArray to store modified values
  }

  return resultArray; // Return the new array
}
