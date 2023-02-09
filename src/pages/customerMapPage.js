
import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Polyline } from "react-native-maps";
import { routeInfo } from "../common/routeMap";
import {viewPoint} from "../common/viewPoint"

export const CustomerMapPage = (props) => {
  const region = {
    latitude: 52.741941448257528 ,
    longitude:  29.54370435943548,
    latitudeDelta: 0.5022,
    longitudeDelta: 0.0421,
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [displayedInfo, setDisplayedInfo] = useState({});

  function onButtonPress(routeName, routeDescription){
    setModalVisible(true);
    setDisplayedInfo({
      name: routeName,
      description: routeDescription
    })
  }
  function onButtonPress(viewPointName, viewPointDescription){
    setModalVisible(true);
    setDisplayedInfo({
      name: viewPointName,
      description: viewPointDescription
    })
  }
  return (   

    <View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
        >
          {           
            viewPoint.map( viewPointInfo => {           
              return(          
                <Marker
                    onPress={() => onButtonPress(viewPointInfo.name,viewPointInfo.description)}
                    coordinate ={{
                      latitude: viewPointInfo.coordinates[1],
                      longitude: viewPointInfo.coordinates[0]
                    }}
                >
                  <Image
                    source={viewPointInfo.icon} 
                    style={{height: 35, width: 35}}
                  />
                </Marker>
              )
            })
          }        
          
          {  
            routeInfo.map( route => {
              const coordinatesObject = route.coordinates.map( current => {
                return {
                  latitude: current[1],
                  longitude: current[0],
                }
              })
                return (
                  <Polyline 
                  onPress={() => onButtonPress(route.name,route.description)}
                  lineDashPattern={[0]}
                  coordinates={coordinatesObject}
                  strokeColor="#000" 
                  strokeColors={[route.color]}
                  strokeWidth={4}
                />)
            })
          } 
        </MapView>
      </View>
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
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    marginTop:35,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
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
    borderRadius: 20,
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