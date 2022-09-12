function generateHashtag (str) {
    let arr = []
      let word = ''
      for (let i = 0; i < str.length; i++) {
          if (str[i] !== ' ') {
              word += str[i]
          }
           else {
              arr.push(word)
              word = ''
          }
      }
      arr.push(word)
      let filteredArr = arr.filter(el => {
          if (el !== '') {
              return el
          }
      })
      let result = '#'
      filteredArr.forEach(el => {
          result += el[0].toUpperCase() + el.slice(1).toLowerCase()
      })
      if (result === '#' || result.length > 140) {
          return false
      }
      return result
  }