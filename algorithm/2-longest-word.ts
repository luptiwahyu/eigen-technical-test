const input: string = 'Saya sangat senang mengerjakan soal algoritma'

function longestWord(sentence: string): string {
  const longest: number = sentence.split(' ').sort((a, b) => b.length - a.length)[0].length
  return `${longest} character`
}

console.log(longestWord(input))
