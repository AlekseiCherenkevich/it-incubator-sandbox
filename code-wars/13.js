function digitalRoot(n) {
    let sum = n;
      while (String(sum).length !== 1) {
          temp = 0
          for (let i = 0; i < String(sum).length; i++) {
              temp += Number(String(sum)[i])
          }
          sum = temp
      }
      return sum
  }
