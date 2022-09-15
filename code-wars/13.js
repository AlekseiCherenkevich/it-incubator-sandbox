function moveZeros(arr) {
    const zeroArr = []
      arr.forEach(el => {
          if (el === 0) {
              zeroArr.push(el)
          }
      })
      let filteredArr = arr.filter(el => el !== 0 || el === null || el === false || el === true)
      return [...filteredArr, ...zeroArr]
  }