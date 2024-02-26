import React, { useState } from 'react'
import Genorator from './hooks/Genorator.jsx'
const Home = () => {
  const [newText, setNewText] = useState()
  const [loremCount, setLoremCount] = useState(1)

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(newText)
      setNewText('TEXT HAS BEEN COPIED')
    } catch (err) {
      setNewText('Failed to copy: ', err)
    }
  }
  return (
    <>
      <input
        type="text"
        value={loremCount}
        onChange={(e) => {
          setLoremCount(e.target.value)
        }}
      />
      <button
        onClick={() => {
          const newLorem = Genorator(loremCount)
          console.log(newLorem, 'in home component')
          setNewText(newLorem)
        }}
      >
        get lorems
      </button>
      <button onClick={handleCopyText}>copy text</button>
      <p>{newText}</p>
    </>
  )
}

export default Home
