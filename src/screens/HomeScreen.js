import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation})=> {
  console.log(props.navigation);
  return <View><Text style={styles.text}>Hi theretre!</Text>
  <Button onPress={() => navigation.navigate('Components')} title="Go to Components Demo" />
  <TouchableOpactiy onPress={() => navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
  </TouchableOpactiy>
  </View>
  
};



const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

