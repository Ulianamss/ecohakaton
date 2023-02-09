import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { animalList } from '../common/animalList';


export const Animal = (props) => {
    return(
        <View style={styles.animalDiv}>
            <View style={styles.imgDiv}>
                <Image 
                    style={styles.img} 
                    source={props.data.image}
                />
            </View>
            <View style={styles.nameDiv}>
                <Text style={styles.nameText}>{props.data.name}</Text>
                {/* <Text>:))</Text> */}
            </View>
        </View>   
    )
}
const styles = StyleSheet.create({
    animalDiv:{
        padding: 10,
        paddingTop: 0,
        width: 600,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 3
    },
    imgDiv:{
        width:135
    },
    nameDiv:{
        width: 420,
        alignSelf:'center',
        alignItems:'flex-start',
    },
    nameText:{
        fontSize:13
    },
    img:{
        width: 125, 
        height: 125
    }
});
