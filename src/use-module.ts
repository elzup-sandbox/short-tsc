import { readFileSync } from 'fs'

async function main() {
  const a = readFileSync('./sample.json', 'utf8')
  console.log(a.split('\n'))
}

main().then(() => console.log('end'))

export default {}
