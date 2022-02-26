import { readFileSync } from 'fs'
import { sub } from './sub'

async function main() {
  const a = readFileSync('./sample.json', 'utf8')
  console.log(a.split('\n'))
  console.log(sub())
}

main().then(() => console.log('end'))

export default {}
