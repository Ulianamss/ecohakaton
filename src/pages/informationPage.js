import React, {useState, useEffect} from 'react'
import { Accordion } from '../components/accordion'
import { StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { infoData } from '../common/info';


export const InformationPage = (props) => {

    return(
        <ScrollView>
            <Text style ={styles.temp}>Информация</Text>
            <Accordion data = {infoData}></Accordion>
        </ScrollView>
    )
    
}


const styles = StyleSheet.create({
    temp: {
        backgroundColor: '#538233',
        fontSize: 40,
        textAlign: 'left',
        paddingTop: 25,
        paddingLeft: 25,
        color: '#FFFFFF'
        
    }
})