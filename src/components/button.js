import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const Button = (props) => {
    return (
         <TouchableOpacity onPress = {props.handelPress}>
            <View style={props.styles.button} >
                <Image style={props.styles.image} source={props.path}/>
            </View>
        </TouchableOpacity>
    )
}
export default Button