import { LoremIpsum } from 'lorem-ipsum'
const Genorator = (loremCount) => {
  console.log(loremCount)
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
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
export default Genorator
