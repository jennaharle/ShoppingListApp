import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    if (item.trim()) {
      setShoppingList([...shoppingList, item]);
      setItem('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ostoslista</Text>
      <TextInput
        style={styles.input}
        placeholder="Lisää uusi tuote"
        value={item}
        onChangeText={setItem}
      />
      <Button title="Lisää" onPress={addItem} />
      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

