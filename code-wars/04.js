function validatePIN (pin) {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      for (let i = 0; i < pin.length; i++) {
          if (!arr.includes(pin[i])) {
              return false
          }
      }
      return pin.length === 4 || pin.length === 6
  }