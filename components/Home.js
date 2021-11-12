import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';

const Home = ({ navigation }) => {
    const [items, setItems] = useState([
      { id: uuidv4(), text: 'Breckenridge Vanilla Porter' },
      { id: uuidv4(), text: 'Bell\'s Two Hearted Ale' },
      { id: uuidv4(), text: 'Kombucha' },
      { id: uuidv4(), text: 'Cold Brew' },
    ]);
  
    const deleteItem = (id) => {
      setItems(prevItems => {
        return prevItems.filter(item => item.id != id);
      });
    }
  
    const addItem = (text) => {
      if(!text) {
        Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
      } else if (items.some(item => item.text == text)) {
        Alert.alert('Error', text + ' is already in the list!', [{text: 'Ok'}]);
      } else {
        setItems(prevItems => {
          return [{id: uuidv4(), text}, ...prevItems]
        });
      }
    }

    return (
        <View style={styles.container}>
            <Header title='Tap List'/>
            <AddItem addItem={addItem}/>
            <FlatList
            data={items}
            renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem}/>)}
            />
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#122F3D'
    }
  })
  
  export default Home;