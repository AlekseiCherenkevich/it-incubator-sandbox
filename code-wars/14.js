function isPangram(string){
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
      let filterArr = alphabet.filter(char => {
          if (string.toLowerCase().includes(char)) {
              return char
          }
      })
      let set = new Set()
      filterArr.forEach(element => {
          set.add(element)
      });
      return set.size === alphabet.length
  }
