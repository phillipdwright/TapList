import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
            name="trash"
            size={20}
            color="#1BE1F2"
            onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#122F3D',
        borderBottomWidth: 1,
        borderColor: '#616161'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
        color: '#1BE1F2'
    }
})

export default ListItem;
