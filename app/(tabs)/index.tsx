import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

function App() {
  
  const photoTypes = [
      { id: 1, name: "Portrait" }, // Portre fotoğrafları
      { id: 2, name: "Landscape" }, // Manzara fotoğrafları
      { id: 3, name: "Macro" }, // Makro çekimler
      { id: 4, name: "Street" }, // Sokak fotoğrafçılığı
      { id: 5, name: "Documentary" }, // Belgesel fotoğrafçılığı
      { id: 6, name: "Wildlife" }, // Vahşi yaşam fotoğrafları
      { id: 7, name: "Fashion" }, // Moda fotoğrafçılığı
      { id: 8, name: "Sports" }, // Spor fotoğrafları
      { id: 9, name: "Architectural" }, // Mimari fotoğraflar
      { id: 10, name: "Aerial" }, // Havadan çekimler
      { id: 11, name: "Underwater" }, // Su altı fotoğrafçılığı
      { id: 12, name: "Abstract" }, // Soyut fotoğraflar
      { id: 13, name: "Food" }, // Yemek fotoğrafçılığı
      { id: 14, name: "Event" }, // Etkinlik fotoğrafçılığı
      { id: 15, name: "Astrophotography" }, // Gökyüzü fotoğrafçılığı
      { id: 16, name: "Black and White" }, // Siyah beyaz fotoğraflar
      { id: 17, name: "Travel" }, // Seyahat fotoğrafçılığı
      { id: 18, name: "Product" }, // Ürün fotoğrafçılığı
      { id: 19, name: "Fine Art" } // Güzel sanatlar fotoğrafçılığı
  ];
    return (
      <View style={styles.container}>
        <FlatList
          data={photoTypes}
          renderItem={({ item }) => {
            return <Text style={styles.content}>{item.name}</Text>;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c3e50',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 50,
      color: '#fff'
    },
    content: {
      fontSize: 30,
      color: '#fff',
      flex: 1,
      backgroundColor: 'darkgrey',
      marginVertical: 10,
      padding: 20,
    }
  })

export default App;

