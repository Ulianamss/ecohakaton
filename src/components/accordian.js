import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Accordian = (props) => {
    //TODO: create accordion from material lib
    const [isPressed, changePressed] = useState(false);

    const styles = StyleSheet.create({
        infoBlock: {
            display: isPressed ? 'block' : 'none',
            background: '#006400'
        },
        accordian: {
            backgroundColor: isPressed ? '#006400' : '#00FF7F'
        } 
    });

    function handlePress() {
        changePressed(!isPressed);
    }

    return(
        <TouchableOpacity onPress = {() => handlePress()}>
            <View style = {styles.accordian}>
                <Image source={props.teg.image}></Image>
                <Text>  {props.teg.header} </Text>
                <View style={styles.infoBlock}>
                    <Text> {props.teg.info} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
