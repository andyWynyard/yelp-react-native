import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, errorMessage, searchApi] = useResults()
  const resultsFilter = (price) =>
    results.filter((result) => result.price === price)
  return (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={resultsFilter('$')} title="Cost Effective ($)" />
        <ResultsList results={resultsFilter('$$')} title="OK price ($$)" />
        <ResultsList results={resultsFilter('$$$')} title="Expensive ($$$)" />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
