// // inputに入力データ全体が入る
// function Main(input) {
//   input = input.split('\n')
//   let inputIndex = parseInt(input[0] , 10)


//   let inputValues = (input[1].split(' '))

//   let intValues = []

//   inputValues.forEach(element => {
//     let tempval = parseInt(element , 10)
//     tempval.push()
//   });

//   let result = []



//   console.log(inputIndex)
//   console.log(intValues)
//   console.log(result)

//   let counter = 0;



// }

let input = `3
8 12 40`

Main(input)

// //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// // Main(require("fs").readFileSync("/dev/stdin", "utf8"));



function Main(input) {
  let lines = []
  let currentLine = ''

  for (let i = 0 ; i < input.length ; i ++) {
    if (input[i] === '\n') {
      lines.push(currentLine)
    } else {
      currentLine += input[i]
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine)
  }

  let n = parseInt(lines[0],10) ;
  let numbers = []
  let num = ''
  for (let i = 0 ; i <= lines[1].length ; i ++) {
    
    if (lines[1][i] === ' ' || i === lines[1].length) {
      if (num.length > 0) {
        numbers.push(parseInt(num,10))
        num = '';
      }
    } else {
      num += lines[1][i]
    }

    let count = 0 ;
    let allEven = true;
    while (allEven) {
      allEven = true;
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
          allEven = false;
          break
        }
      }

      if (allEven) {
        for (let i = 0; i< numbers.length; i ++) {
          numbers[i] /= 2
        }

        count++
      }
    }
  }
  console.log(count)
}