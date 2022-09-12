function printerError(s) {
    let errorsCount = 0
    let sLength = s.length
    for (let i = 0; i < sLength; i++) {
        if (s[i] > 'm') {
            errorsCount += 1
        }
    }
    return `${errorsCount}/${sLength}`
}