import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.constainer}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      {result.is_closed ? <Text style={styles.closed}>CLOSED</Text> : null}
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
  constainer: { marginLeft: 10 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    // fontSize: 16,
  },
  closed: {
    position: 'absolute',
    top: 20,
    fontSize: 60,
    color: '#ff000077',
    zIndex: 99999,
  },
})
