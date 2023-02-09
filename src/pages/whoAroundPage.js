import React from 'react';
import { useState } from 'react';
import {  Alert, Modal, StyleSheet, Text, Pressable, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { Animal } from '../components/animal';
import { animalList } from '../common/animalList';


export const WhoAroundPage = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [displayedInfo, setDisplayedInfo] = useState({});
  
    function onButtonPress(animalName, animalDescription, animalImage){
      setModalVisible(true);
      setDisplayedInfo({
        name: animalName,
        description: animalDescription,
        image: animalImage
      })
    }
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.whoIsHere}>Кто здесь?</Text>
            </View>
            <ScrollView style={styles.container}>
                {
                    animalList.map( animal =>
                        <TouchableOpacity  
                        onPress={() => onButtonPress(animal.name,animal.description,animal.image)}
                        >
                        <Animal                 
                        data = {animal}></Animal>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
            <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{displayedInfo.name}</Text>
                            <Text style={styles.modalText}>{displayedInfo.description}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>скрыть</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        marginTop:0,
        paddingTop: 5,
        marginBottom: 10,
        backgroundColor: '#538233'
    },
    whoIsHere:{
        color:'white', 
        padding:15,
        fontSize:50
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      btns:{
        alignItems:"flex-end",
        marginTop: 35,
      },
      button: {
        height: 35,
        width: 70,
        borderRadius: 20,
        paddingTop: 2.5,
        marginLeft: 5,
        marginRight: 5,
        elevation: 2
      },
      buttonOpen: {
        margin: 7,
        backgroundColor: "white",
      },
      buttonClose: {
        backgroundColor: "#538233",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        paddingTop: 5,
        paddingLeft: 10,
        alignItems: 'center',
      },
      textOpen:{
        paddingTop: 5,
        fontSize: 10,
        color:"#7AED0C",
        textAlign:"center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});