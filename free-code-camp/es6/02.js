const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s.pop()
  s.pop()
  s.pop()
  // Using s = [2, 5, 7] would be invalid
  s.push(2)
  s.push(5)
  s.push(7)
  return s
  // Only change code above this line
}
editInPlace();