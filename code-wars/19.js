function deleteNth(arr,n){
    let res = []
      for (let i = 0; i < arr.length; i++) {
          let qty = 0
          for (let j = 0; j < res.length; j++) {
              if (res[j] === arr[i]) 
              qty += 1
          }
          if (qty < n) {
              res.push(arr[i])
          }
      }
      return res
  }