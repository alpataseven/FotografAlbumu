import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native'
  import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function HomeScreen() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fotoğraf Albümü</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                 onPress={() => navigation.navigate('PhotoScreen')}
            >
                <Text style={styles.buttonText}>Albüme Git</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
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
})