function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      let mult = 1
      for (let j = 0; j < arr[i].length; j++) {
        mult *= arr[i][j]
      }
      product *= mult
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);