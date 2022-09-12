function narcissistic(value) {
    let n = String(value).length
      let sum = 0
      for (let i = 0; i < n; i++) {
          sum += String(value)[i] ** n
      }
      return sum === value
  }
  