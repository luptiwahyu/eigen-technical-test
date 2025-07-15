function reverseAlphabet(text: string): string {
  const letters: string = text.match(/[A-Za-z]/g).reverse().join('')
  const numbers: string = text.match(/[0-9]/g).join('')
  return letters + numbers
}

console.log(reverseAlphabet('NEGIE1'))
