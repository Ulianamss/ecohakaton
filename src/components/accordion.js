import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { AccordionItem  } from '../components/accordionItem';



export const Accordion = (props) => {
    console.log(props)
    return(
        props.data.map(element => {

            return <AccordionItem  teg = {element} ></AccordionItem >
        })
    )
}