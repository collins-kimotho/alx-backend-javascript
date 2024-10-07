export default function createIteratorObject(report) {
  // Extract all employees from all departments into a single array
  const allEmployees = Object.values(report.allEmployees).flat();
  // Return an iterator object that goes through the employees
  return allEmployees[Symbol.iterator]();
}
