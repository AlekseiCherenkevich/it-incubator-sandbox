function nbYear(p0, percent, aug, p) {
    let years = 1
    let newP = p0

    while (newP + newP * percent / 100 + aug < p) {
        newP = Math.floor(newP + newP * percent / 100 + aug)
        years += 1
    }
    
    return years
}