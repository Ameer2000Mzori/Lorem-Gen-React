import { LoremIpsum } from 'lorem-ipsum'
const Genorator = () => {
  const loremsCount = 2
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

  let newLorem = lorem.generateWords(loremsCount)

  console.log(lorem.generateWords(2))

  return { newLorem }
}
export default Genorator
