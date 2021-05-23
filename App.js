import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Filo = createStackNavigator();

function TelaHome({navigation}){
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela Home</Text>
            <Text>CFB Cursos</Text>
            <Button
                title="Tela Canal"
                onPress={() => navigation.navigate('Canal')}
            />
        </View>
    );
}

function TelaCanal({navigation}){
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela Canal</Text>
            <Text>Tela 2</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Filo.Navigator >
                <Filo.Screen
                    name="Home"
                    component={TelaHome}
                    options={{title: 'Tela Inicial'}}
                />
                <Filo.Screen
                    name="Canal"
                    component={TelaCanal}
                    options={{title: 'Tela canal'}}
                />
            </Filo.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    
})