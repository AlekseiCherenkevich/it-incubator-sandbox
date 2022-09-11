function chain(input, fs) {
    let num = [...arguments][0]
      let func1 = [...arguments][1][0]
      let func2 = [...arguments][1][1]
      let func3 = [...arguments][1][2]
      let func4 = [...arguments][1][3]
      if ([...arguments][1].length === 2) {
          return func2(func1(num))
      }
      if ([...arguments][1].length === 3) {
          return func3(func2(func1(num)))
      }
      if ([...arguments][1].length === 4) {
          return func4(func3(func2(func1(num))))
      }
      
  }