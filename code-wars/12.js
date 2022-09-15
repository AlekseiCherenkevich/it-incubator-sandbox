function rgb(r, g, b){
    console.log(arguments)
    let arr = [...arguments]
      let res = []
      arr.forEach(el => {
          res.push(convert(el))
      })
      let str = ''
      res.forEach(el => {
          if (String(el).length === 1) {
              str += ('' + 0 + el)
          } else {
              str += el
          }
      })
      return str
  }
  
  function convert(num) {
      const obj = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'}
  
      if (num <= 16) {
          if (num < 0) {
              return obj[0]
          }
          return obj[num]
      } else {
          if (num > 255) {
              return '' + convert(Math.floor(255 / 16)) + obj[255 % 16]
          } else {
              return '' + convert(Math.floor(num / 16)) + obj[num % 16]
          }
          
      }
    }