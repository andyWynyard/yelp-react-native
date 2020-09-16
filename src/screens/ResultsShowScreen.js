import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const selectedId = navigation.getParam('id')

  const getResult = async (id) => {
    const { data } = await yelp.get(`/${id}`)
    setResult(data)
  }

  useEffect(() => {
    getResult(selectedId)
  }, [])

  if (!result) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  image: { width: '100%', height: 300 },
  title: { fontSize: 30, alignSelf: 'center' },
})
