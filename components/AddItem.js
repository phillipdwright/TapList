import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');
    const onChange = (textValue) => setText(textValue);
  return (
      <View>
          <TextInput
            placeholder="Add Item..."
            style={styles.input}
            onChangeText={onChange}
          />
          <TouchableOpacity style={styles.btn} onPress={() => {addItem(text)}}>
              <Text style={styles.btnText}><Icon name="plus" size={20}/>Add Item</Text>
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 18,
        backgroundColor: '#D4DBDD',
        color: '#09091C'
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

export default AddItem;
