import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScream = () => {
    const name = 'Stephen';
    const greeting = <Text>Hello to you!</Text>;
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
    );


};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;