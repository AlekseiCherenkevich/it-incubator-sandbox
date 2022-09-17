function mix(s1, s2) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      const set = new Set()
      let obj = {}
      const strObj = {}
      addSet(set, s1, alphabet, s2)
      addSet(set, s2, alphabet, s1)
      setObj(set, obj, s1, s2)
      setStrObj(obj, strObj)
      const filteredArr = Object.entries(strObj).filter(el => el[1]['qty'] !== 1)
      const sortedArr = filteredArr
          .sort((a,b) => {
              if (b[1]['qty'] !== a[1]['qty']) {
                  return (b[1]['qty'] - a[1]['qty'])
              } else {
                  if (String(a[1]['num']).charCodeAt(0) !== String(b[1]['num']).charCodeAt(0)) {
                      return String(a[1]['num']).charCodeAt(0) - String(b[1]['num']).charCodeAt(0)
                  } else {
                      return (a[0].charCodeAt(0) - b[0].charCodeAt(0))
                  }
              }
              
          })
      let str = ''
      filteredArr.forEach(el => {
          str += el[1].num + ':' + el[0].repeat(el[1].qty) + '/'
      })
      return str.slice(0, -1)
  }
  
  function setStrObj(obj, strObj) {
      for (let char in obj) {
          strObj[char] = {}
          strObj[char]['isEqual'] = false
          strObj[char]['qty'] = 0
          strObj[char]['num'] = '='
          if (obj[char][0] === obj[char][1]) {
              strObj[char]['isEqual'] = true
          } else {
              if (obj[char][0] > obj[char][1]) {
                  strObj[char]['num'] = 1
              } else {
                  strObj[char]['num'] = 2
              }
          }
          if (obj[char][0] >= obj[char][1]) {
              strObj[char]['qty'] = obj[char][0]
          } else {
              strObj[char]['qty'] = obj[char][1]
          }
      }
    }
  
    function setObj(set, obj, s1, s2) {
      for (let char of set) {
          obj[char] = []
          let sum1 = 0
          let sum2 = 0
          for (let i = 0; i < s1.length; i++) {
              if (char === s1[i]) {
                  sum1 += 1
              }
          }
          for (let i = 0; i < s2.length; i++) {
              if (char === s2[i]) {
                  sum2 += 1
              }
          }
          obj[char].push(sum1)
          obj[char].push(sum2)
      }
    }
  
     function addSet(set, str, alphabet, altStr) {
      for(let i = 0; i < str.length; i++) {
          if (alphabet.includes(str[i])) {
              set.add(str[i])
          }
      }
    }