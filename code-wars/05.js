function XO(str) {
    let xCount = 0
    let oCOunt = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            xCount += 1
        }
        if (str[i].toLowerCase() === 'o') {
            oCOunt += 1
        }
    }
    return xCount === oCOunt
}