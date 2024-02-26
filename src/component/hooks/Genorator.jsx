import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Genorator = () => {
  const [data, setData] = []
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const numberOfParagraphs = 4
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          ` https://api.api-ninjas.com/v1/loremipsum?paragraphs=${numberOfParagraphs}`,
          { headers: { 'X-Api-Key': 'YOUR_API_KEY' } }
        )

        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  })
  return { data, error, loading }
}
// https://api.api-ninjas.com/v1/loremipsum?paragraphs=
export default Genorator
