

let answer = "" // 0 から始まるから最初xいれとく＞？
for (let i = 1 ; i <= 100000; i ++) {
  answer += parse8toSnowman(i)
}

// console.log("rawAnser " , answer)
let temp = ""
for (let i = 388887 ; i <= 388918 ; i ++) {
  temp += answer[i]
}
console.log(temp)

// console.log(answer[38888])
// let newAns = ""
// for (let i = 38888 ; i <= 38888 + 30 ; i ++) {
//   newAns += answer[i]
// }

// console.log("newans => " , newAns)

function parse8toSnowman(num : number) {
  const raw = num.toString()
  const splitted = raw.split('')
  let result = ''
  splitted.forEach((s) => {
    if (s === "8"){
      result += "SNOWMAN"
    } else {
      result += s
    }
  })
  return result + "-"
}

