import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, LayoutAnimation } from 'react-native';

export const AccordionItem = (props) => {
    const [isPressed, changePressed] = useState(false);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const styles = StyleSheet.create({
        infoBlock: {
            display: isPressed ? 'flex' : 'none',
            backgroundColor: '#f4fafd',
            paddingLeft: 15
        },
        accordian: {
            backgroundColor: isPressed ? '#DCDCDC' : '#f4fafd'
        }, 
        image: {
            width: 40,
            height: 40,
            marginBottom:8,
            marginLeft: 5
          // alignItems: 'center'        
        },
        imagla:{
          width: 10,
          paddingTop: 10   
        },
        aboba:{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
        },
        granica: {
           // height: '100px',
            borderWidth: 1, 
            borderColor: 'black', 
        },
        text1: {
            fontSize: 25,
            padding: 0,
            textAlign: 'left',
            paddingTop: 10    
        },
        anime:{
            width: '100%',
            alignSelf: 'center',
            alignItems: 'flex-start',
            position: 'absolute',
            left: 65
        },
        text2:{
            fontSize: 20           
        }
    });

    function handlePress() {
        changePressed(!isPressed);
    }

    return(
        <TouchableOpacity onPress = {() => handlePress()}>
            <View style = {styles.accordian}>
                <SafeAreaView>
                    <View style={styles.granica}>
                <View>

                    <View style = {styles.aboba}>

                        <View style = {styles.imagla}>
                         <Image style = {styles.image} source={props.teg.image}></Image> 
                         </View>

                         <View style= {styles.anime}>
                                <Text style = {styles.text1}>  {props.teg.header} </Text>
                                </View>
                     </View>

                     <View style={styles.infoBlock}>
                    <Text style = {styles.text2}> {props.teg.info} </Text>     
                             </View>


                </View>
            </View>
                </SafeAreaView>
            </View>
        </TouchableOpacity>
    )
}