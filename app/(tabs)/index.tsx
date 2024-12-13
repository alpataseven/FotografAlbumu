import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

const DATA = [
  { id: 1, title: "Portrait" }, // Portre fotoğrafları
  { id: 2, title: "Landscape" }, // Manzara fotoğrafları
  { id: 3, title: "Macro" }, // Makro çekimler
  { id: 4, title: "Street" }, // Sokak fotoğrafçılığı
  { id: 5, title: "Documentary" }, // Belgesel fotoğrafçılığı
  { id: 6, title: "Wildlife" }, // Vahşi yaşam fotoğrafları
  { id: 7, title: "Fashion" }, // Moda fotoğrafçılığı
  { id: 8, title: "Sports" }, // Spor fotoğrafları
  { id: 9, title: "Architectural" }, // Mimari fotoğraflar
  { id: 10, title: "Aerial" }, // Havadan çekimler
  { id: 11, title: "Underwater" }, // Su altı fotoğrafçılığı
  { id: 12, title: "Abstract" }, // Soyut fotoğraflar
  { id: 13, title: "Food" }, // Yemek fotoğrafçılığı
  { id: 14, title: "Event" }, // Etkinlik fotoğrafçılığı
  { id: 15, title: "Astrophotography" }, // Gökyüzü fotoğrafçılığı
  { id: 16, title: "Black and White" }, // Siyah beyaz fotoğraflar
  { id: 17, title: "Travel" }, // Seyahat fotoğrafçılığı
  { id: 18, title: "Product" }, // Ürün fotoğrafçılığı
  { id: 19, title: "Fine Art" } // Güzel sanatlar fotoğrafçılığı
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotoğraf Albümü</Text>
      <FlatList
        data={DATA}
        renderItem={
          ({ item }) => 
        <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => console.log('Albüm butonuna tıklandı')}
      >
        <Text style={styles.buttonText}>{item.title}</Text>
      </Pressable>
      }
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.title}>Albüm bulunamadı.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 30,
    color: '#fff',
    flex: 1,
    backgroundColor: '#007BFF',
    marginVertical: 10,
    padding: 20,
  }
});

export default App;
