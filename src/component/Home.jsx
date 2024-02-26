import React from 'react'
import Genorator from './hooks/Genorator.jsx'
const Home = () => {
  return (
    <button
      onClick={() => {
        let newLorem = Genorator()
        console.log(newLorem, 'in home component')
      }}
    >
      get lorems
    </button>
  )
}

export default Home
