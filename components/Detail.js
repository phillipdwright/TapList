import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Detail = ({ route, navigation }) => {
    const { item } = route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Details', { item })}
        >
            <Text style={styles.btnText}>Go to Details... again</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122F3D',
    padding: 15
  },
  text: {
    padding: 9,
    fontSize: 18,
    color: '#1BE1F2'
  },
  btn: {
      backgroundColor: '#09091C',
      padding: 9,
      margin: 5
  },
  btnText: {
      color: '#1BE1F2',
      fontSize: 20,
      textAlign: 'center',
  }
})

export default Detail;