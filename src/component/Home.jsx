import React, { useState } from 'react'
import Genorator from './hooks/Genorator.jsx'
const Home = () => {
  const [newText, setNewText] = useState()
  const [loremCount, setLoremCount] = useState(1)
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
      <p>{newText} HEY</p>
    </>
  )
}

export default Home
