import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Chiangmai', code: '50000' },
    { place: 'Phuket', code: '83000' },
    
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.center}>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>   
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );

}
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        fontSize: 30,
        color: 'red',
        marginTop: 20,
    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    
})
