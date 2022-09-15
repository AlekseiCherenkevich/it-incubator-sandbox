function zeroPlentiful(arr){
    let res = []
      let count = 0
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 0) {
              count += 1
          } else {
              if (count !== 0) {
                  res.push(count)
                  console.log(res)
                  count = 0
              }
          }
      }
      if (count !== 0) {
          res.push(count)
      }
      let passedCounter = 0
      res.forEach(el => {
          if (el >= 4) {
              passedCounter += 1
          }
      })
      return (res.length === passedCounter) ? passedCounter : 0
  }