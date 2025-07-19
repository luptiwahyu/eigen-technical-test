const INPUT: string[] = ['xc', 'dz', 'bbb', 'dz']
const QUERY: string[] = ['bbb', 'ac', 'dz']

function countQueryInput(input: string[], query: string[]): number[] {
  return query.map((q) => input.filter((i) => i === q).length)
}

console.log(countQueryInput(INPUT, QUERY))
