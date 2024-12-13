import * as React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined; // Home ekranı parametre almaz
  Photos: undefined; // Photos ekranı parametre almaz
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type PhotosScreenProps = NativeStackScreenProps<RootStackParamList, 'Photos'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotoğraf Albümü</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate('Photos')}
      >
        <Text style={styles.buttonText}>Albüme Git</Text>
      </Pressable>
    </View>
  );
};

const PhotosScreen: React.FC<PhotosScreenProps> = () => {
  const DATA = [
    { id: 1, title: "Portrait" },
    { id: 2, title: "Landscape" },
    { id: 3, title: "Macro" },
    { id: 4, title: "Street" },
    { id: 5, title: "Documentary" },
    { id: 6, title: "Wildlife" },
    { id: 7, title: "Fashion" },
    { id: 8, title: "Sports" },
    { id: 9, title: "Architectural" },
    { id: 10, title: "Aerial" },
    { id: 11, title: "Underwater" },
    { id: 12, title: "Abstract" },
    { id: 13, title: "Food" },
    { id: 14, title: "Event" },
    { id: 15, title: "Astrophotography" },
    { id: 16, title: "Black and White" },
    { id: 17, title: "Travel" },
    { id: 18, title: "Product" },
    { id: 19, title: "Fine Art" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotoğraf Albümü</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => console.log(`Albüm ${item.title} seçildi`)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.title}>Albüm bulunamadı.</Text>}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Photos" component={PhotosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
});
