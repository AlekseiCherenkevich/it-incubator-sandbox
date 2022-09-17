function findMissingLetter(array)
{
   const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    // let result = ''
    let alphabetStartIdx = alphabet.indexOf(array[0].toUpperCase())
    for (let i = 0; i < array.length; i++) {
        if (array[i].toUpperCase() !== alphabet[alphabetStartIdx + i]) {
            if (array[i].toUpperCase() === array[i]) {
                return alphabet[alphabetStartIdx + i]
            } else {
                return alphabet[alphabetStartIdx + i].toLowerCase()
            }
        }
    }
    return result
}