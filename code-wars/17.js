function primeFactors(n){
    let num = n
    let obj = {}
    let primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 349, 433, 461, 479, 677, 877, 7537]
    for (let i = 0; i < primeArr.length; i++) {
        let count = 0
        while (num % primeArr[i] === 0) {
            num = num / primeArr[i]
            count += 1
        }
        if (count > 0) {
            obj[primeArr[i]] = count
        }
    }
    let str = ''
    for (let el in obj) {
        let subStr = ''
        if (obj[el] > 1) {
            subStr = `**${obj[el]}`
        }
        str = str + `(${el}${subStr})`
    }
  if (num > 1) {
        str += `(${num})`
    }
    return str
}