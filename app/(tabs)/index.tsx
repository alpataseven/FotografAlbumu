import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function App() {
  const message = [
    {
      name: 'fafasd',
      id: 1
    },
    {
      name: 'fgjhfg',
      id: 2
    },
    {
      name: 'fafajghgsd',
      id: 3
    },
    {
      name: 'fafaghjghjkghsd',
      id: 4
    },
    {
      name: 'dfgdgd',
      id: 5
    },
    {
      name: 'xcvbcvbc',
      id: 6
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={message}
        renderItem={({ item }) => {
          return <Text style={styles.content}>{item.name}</Text>;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
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

