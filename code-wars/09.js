function index(array, n){
    if (array.length >= n + 1) {
      return array[n] ** n
  } else {
      return -1
  }
}