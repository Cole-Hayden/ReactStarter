import React, { useReducer } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {

    //state === { red: number, green: number, blue: number };
    //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

    switch(action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount };
        case 'blue':
            return {...state, blue: state.blue + action.amount };
        case 'green':
            return {...state, green: state.green + action.amount };
        default:
            return state;
    }
};



const SquareScreen = () => {

    

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    console.log(state);

    return (
    <View>
        <ColorCounter onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT}) } onDecrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT}) } color="Red" />
        <ColorCounter color="Blue" 
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({colorToCHange: 'blue', amount: COLOR_INCREMENT })}
        />
        
        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
    </View>);
};

const styles = StyleSheet.create({});

export default SquareScreen;