import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageScreen = () => { 
    return ( <View>
        <ImageDetail title="Forest" score={8} imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetail title="Beach" score={7} imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetail title="Mountain" score={9} imageSource={require('../../assets/mountain.jpg')}/>


        
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;