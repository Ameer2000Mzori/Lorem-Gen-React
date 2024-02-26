import { LoremIpsum } from 'lorem-ipsum'
const Genorator = (loremCount) => {
  if (loremCount >= 10000) {
    return 'maximum number of request is 9999'
  } else {
    console.log(loremCount)
    const lorem = new LoremIpsum({
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    })

    let newLorem = lorem.generateWords(Number(loremCount))
    newLorem = newLorem.toString()

    console.log(newLorem)

    return newLorem
  }
}
export default Genorator
