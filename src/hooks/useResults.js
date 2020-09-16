import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 20,
          term: searchTerm,
          location: 'stockholm',
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('this is broken')
    }
  }

  useEffect(() => {
    searchApi('burgers')
  }, [])
  return [results, errorMessage, searchApi]
}
