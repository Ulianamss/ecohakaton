import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export const Accordian = (props) => {
    //TODO: create accordion from material lib

    var isPressed = false;
    
    const styles = StyleSheet.create({
        infoBlock: {
            display: isPressed ? block : none
        },
        accordian: {
            backgroundColor: isPressed ? 'darkGreen' : 'green'
        },
        infoBlock: {
            background: 'darkgreen'
        }
    });

    function handlePress() {
        isPressed = !isPressed;
    }

    return(
        <TouchableOpacity onPress = {() => handlePress()}>
            <View styles = {styles.accordian}>
                <Image source={elemnt.image}></Image>
                <Text>  {elemnt.header} </Text>
                <View style={styles.infoBlock}>
                    <Text> {elemnt.info} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
