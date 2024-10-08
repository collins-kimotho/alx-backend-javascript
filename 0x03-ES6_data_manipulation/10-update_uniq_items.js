export default function updateUniqueItems(groceries) {
  // Check if the argument is a Map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the entries of the map
  groceries.forEach((quantity, item) => {
    // Update quantity if it is 1
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  });

  return groceries; // Return the updated map
}
