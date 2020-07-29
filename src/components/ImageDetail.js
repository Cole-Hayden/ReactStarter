import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageDetail = ({ imageSource, title, score}) => {
    return <View>
        <Image source={require(imageSource)} />
        <Text>{title}</Text>
        <Text>Image Score - {score}</Text>
        </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;