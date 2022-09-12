function orderWeight(strng) {
    const arr = []
     let weight = ''
     let lastSpaceIdx = 0
     for (let i = 0; i < strng.length; i++) {
         if (strng[i] !== ' ') {
             weight += strng[i]
         } else {
             lastSpaceIdx = i
             arr.push(weight)
             weight = ''
         }
     }
     arr.push(strng.slice(lastSpaceIdx))
     let objArr = []
     arr.forEach(el => {
         let obj = {}
         let sum = 0
         for (let k = 0; k < el.length; k++) {
             sum += Number(el[k])
         }
         obj[el.trim()] = sum
         objArr.push(obj)
     })
     let sortedArr = objArr.sort((a, b) => {
         if (Object.values(a)[0] === Object.values(b)[0]) {
             return Object.keys(a)[0].localeCompare(Object.keys(b)[0])
         }
         return Object.values(a)[0] - Object.values(b)[0]
         
     })
     let resultArr = []
     sortedArr.forEach(el => {
         resultArr.push(Object.keys(el)[0])
     })
     let resultStr = ''
     resultArr.forEach(el => {
         resultStr += el + ' '
     })
     resultStr.trim()
     let splittedReult = resultStr.split('  ')
     let result = ''
     splittedReult.forEach(el => {
         result += el + ' '
     })
     return result.trim()
 }