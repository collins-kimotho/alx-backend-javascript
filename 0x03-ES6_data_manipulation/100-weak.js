// Exporting an instance of WeakMap
export const weakMap = new WeakMap();

// Exporting the queryAPI function
export function queryAPI(endpoint) {
  // Check if endpoint is valid
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  // Check if the WeakMap has an entry for the given endpoint
  if (!weakMap.has(endpoint)) {
    // Initialize the count to 0 if it's the first time this endpoint is being used
    weakMap.set(endpoint, 0);
  }

  // Get the current count for this endpoint
  const count = weakMap.get(endpoint);

  // Increment the count
  weakMap.set(endpoint, count + 1);

  // If the count is 5 or more, throw an error
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
