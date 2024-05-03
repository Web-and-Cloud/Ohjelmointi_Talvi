function remove_array_element(arr, element) {
    // Use indexOf to find the index of the element
    const index = arr.indexOf(element);
  
    // Check if the element is found in the array
    if (index !== -1) {
      // Use splice to remove the element at the found index
      arr.splice(index, 1);
    }
  
    return arr;
  }
  
  // Example usage:
  const originalArray = [2, 5, 9, 6];
  console.log(remove_array_element(originalArray, 5));
