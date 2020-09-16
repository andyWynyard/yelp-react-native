import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        placeholder="Search"
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10,
    backgroundColor: '#aaa',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
})

export default SearchBar
