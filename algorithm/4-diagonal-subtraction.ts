const matrix: number[][] = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

function diagonalSubtraction(matrix: number[][]): number {
  const length: number = matrix[0].length
  const leftToRight: number[] = []
  const rightToLeft: number[] = []

  for (let i = 0; i < length; i++) {
    leftToRight.push(matrix[i][i])
    rightToLeft.push(matrix[i][length-i-1])
  }

  const ltrSum: number = leftToRight.reduce((total, value) => total + value)
  const rtlSum: number = rightToLeft.reduce((total, value) => total + value)

  return ltrSum - rtlSum
}

console.log(diagonalSubtraction(matrix))
