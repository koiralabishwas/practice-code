const marks = [0, 0,90] 

function calculateGrade (marks) {
  let total = 0
  for (let i = 0; i < marks.length ; i ++) {
    total += marks[i]
  }
  const average = total / marks.length
  console.log(average)

  let grade = (average <= 59) ? "F" : (average <= 69) ? "D" : (average <= 79) ? 'C' : (average <= 89) ? "B" : "A"

  return grade
}










function calculateGradev2 (marks) {
  
  const average = getAverage(marks)

  let grade = (average <= 59) ? "F" : (average <= 69) ? "D" : (average <= 79) ? 'C' : (average <= 89) ? "B" : "A"

  return grade
}

function getAverage (marks) {
  let total = 0
  for (let mark of marks) {
    total += mark
  }
  return total / marks.length
}

console.log(calculateGradev2(marks))