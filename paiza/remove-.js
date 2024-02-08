    // console.log(lines[0])
    let temp = lines[0].split("")
    //   console.log(temp)
        let dash = ""
    
      
      let result = ''
      
     for (let i = 0; i < temp.length ; i ++) {
        //  console.log(temp[i])
         if (temp[i] === "-"){
            dash = temp[i]
    
            //  console.log(temp[i])
         } else {
            result += dash
            dash = ""
            result+= temp[i]
         }
             
         
         
     }
     result += dash
     
     console.log(result)
    