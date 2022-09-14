function shapeArea(n) {
    //coding and coding...
    if (n === 1) {
        return 1
    } else {
        let count = 1
        for (let i = 2 ; i <= n; i++) {
            count += 4 * (i - 1)
        }
        return count
    }
    
}