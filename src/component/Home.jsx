import React, { useState } from 'react'
import Genorator from './hooks/Genorator.jsx'
const Home = () => {
  const [newText, setNewText] = useState()
  const [textCopied, setTextCopied] = useState()
  const [loremCount, setLoremCount] = useState(1)

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(newText)
      setTextCopied('COPIED!')
    } catch (err) {
      setTextCopied('Failed... copy: ', err)
    }
  }
  return (
    <>
      <div className="flex flex-col h-[100vh] w-[100vw] text-center items-center justify-end">
        <div className="h-[10%] fixed top-0 left-0 w-[100%] text-center items-center justify-center gap-4 flex flex-row bg-zinc-400 text-white border-b-2 border-white">
          <input
            className="text-black rounded-[6px]"
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
          <p>{textCopied}</p>
        </div>
        <div className="h-[90%] w-[100%] overflow-auto text-start items-start  flex flex-row bg-zinc-400 text-white p-4">
          <p>{newText}</p>
        </div>
      </div>
    </>
  )
}

export default Home
