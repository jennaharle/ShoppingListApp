import React, { useState } from 'react';
import { Image, StyleSheet, FlatList, View, TouchableOpacity, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Ostoslista-tila
  const [shoppingList, setShoppingList] = useState<{ id: string; name: string }[]>([]);
  const [newItem, setNewItem] = useState('');

  // Tuotteen lisääminen
  const addItem = () => {
    if (newItem.trim()) {
      const item = {
        id: Date.now().toString(), 
        name: newItem,
      };
      setShoppingList((prevList) => [...prevList, item]);
      setNewItem(''); 
    }
  };

  // Tuotteen poisto
  const removeItem = (id: string) => {
    setShoppingList((prevList) => prevList.filter(item => item.id !== id));
  };

  // Ostoslistan renderointi
  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity onPress={() => removeItem(item.id)}>
      <ThemedView style={styles.itemContainer}>
        <ThemedText>{item.name}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ostoslista</ThemedText>
      </ThemedView>

      
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Lisää uusi tuote"
          value={newItem}
          onChangeText={setNewItem}
        />
        <Button title="Lisää" onPress={addItem} />
      </ThemedView>

    
      <ThemedView style={styles.listContainer}>
        <FlatList
          data={shoppingList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#FFB6C1',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFC0CB',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#FFC0CB',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#FFC0CB',
  },
  listContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
 
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
