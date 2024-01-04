import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Shams</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  )
}

export default Welcome