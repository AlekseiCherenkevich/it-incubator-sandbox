function findOdd(A) {
    console.log(A)
     if (A.length >= 3) {
          let sortedArr = A.sort((a, b) => a - b)
          let result = []
          sortedArr.forEach(element => {
              if (!result.includes(element)) {
                  result.push(element)
              } else {
                  result.pop()
              }
              
          });
          return result[0];
      }
      if (A.length === 1) {
          return A[0]
      }
  }