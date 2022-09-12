function findOutlier(integers){
    let arrOdd = []
      let arrEven = []
      integers.forEach(el => {
          if (el % 2 === 0) {
              arrEven.push(el)
          } else {
              arrOdd.push(el)
          }
          
      })
      return arrOdd.length < arrEven.length
          ? arrOdd[0]
          : arrEven[0]
  }