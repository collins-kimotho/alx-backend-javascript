export default function iterateThroughObject(reportWithIterator) {
  // Convert iterator into an array of employees
  const employees = [...reportWithIterator];
  
  // Join the array into a single string, separated by '|'
  return employees.join(' | ');
}

