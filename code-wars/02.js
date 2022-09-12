function sumTwoSmallestNumbers(numbers) {  
    let a =  Math.min(...numbers)
      let filteredArr = numbers.filter(num => num !== a)
      return Math.min(...filteredArr) + a
  }