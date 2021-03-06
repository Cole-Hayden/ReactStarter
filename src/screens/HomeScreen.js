import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation})=> {
  console.log(props.navigation);
  return <View><Text style={styles.text}>Hi theretre!</Text>
  <Button onPress={() => navigation.navigate('Components')} title="Go to Components Demo" />
  <Button onPress={() => navigation.navigate('ImageScreen')} title="Go to Image Demo" />

  <TouchableOpactiy onPress={() => navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
  </TouchableOpactiy>
  <Button title="Go to Counter Demo" onPress={() => navigation.navigate('Counter')} />
  <Button title="Go to Color Demo" onPress={() => navigation.navigate('Color')} />
  <Button title="Go to Square Demo" onPress={() => navigation.navigate('Square')} />
  <Button title="Go to Text Demo" onPress={() => navigation.navigate('Text')} />

  </View>
  
};



const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

