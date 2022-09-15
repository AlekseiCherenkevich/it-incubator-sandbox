function rot13(message){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      function convertChar(char) {
          if (alphabet.includes(char.toUpperCase())) {
              let index = alphabet.indexOf(char.toUpperCase())
          if (index + 13 > alphabet.length - 1) {
              return alphabet[(index + 13) % (alphabet.length)] 
          } else {
              return alphabet[index + 13]
          }
          } else {
              return char
          }
      }
      let result = ''
      for (let i = 0; i < message.length; i++) {
          if (message[i] === message[i].toUpperCase()) {
              result += convertChar(message[i])
          } else {
              result += convertChar(message[i]).toLowerCase()
          }
      }
      return result
  }