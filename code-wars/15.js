function sumDigPow(a, b) {
    let arr = []
      for (let i = a; i <= b; i++) {
          let number = 0
          for (let j = 0; j < String(i).length; j++) {
              number += Number(String(i)[j])**(j + 1)
          }
          if (number === i)
          arr.push(number)
      }
      return arr
  }
  