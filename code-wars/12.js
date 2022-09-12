
function createPhoneNumber(numbers){
    let tel = ''
    numbers.forEach((el, i) => {
      if (i === 0) {
          tel += '(' + el
      }
      if (i === 1) {
          tel += el
      }
      if (i === 2) {
          tel += el + ') '
      }
      if (i === 5) {
          tel += el +'-'
      }
      if ([3, 4, 6, 7, 8, 9].includes(i)) {
          tel += el
      }
    });
    return tel
  }