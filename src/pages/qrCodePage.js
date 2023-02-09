import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Modal, Pressable, TouchableOpacity, Button} from 'react-native';
import { Camera } from 'expo-camera';
import faunaAndFloraMap from '../common/faunaAndFloraMap';
import { BarCodeScanner } from 'expo-barcode-scanner';


export const QrCodePage = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [displayInfo, setDisplayInfo] = useState({});

  function handleModal (){
    setModalVisible(false);
    scanned && setScanned(false)
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const key = data.split('/')[3];
    const objectToDisplay = faunaAndFloraMap.get(key);
    setDisplayInfo(objectToDisplay)
    if (!displayInfo){
      alert ("Неизвестный QR-код")
    } else{
      setModalVisible(true)
    }    
  }; 

  return (
    <View style={styles.container}>      
    

    <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
        {scanned && <Button
          title={'Tap to Scan Again'} 
          onPress={() => setScanned(false)} 
        />}
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
            <Text style={styles.modalText}>{displayInfo.name}</Text>
            <Text style={styles.modalText}>{displayInfo.description}</Text>

            {scanned && <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => handleModal()} 
        >
          <Text style={styles.textStyle}>Tap to Scan Again</Text>
        </Pressable>}
          </View>
        </View>
      </Modal>
      </View>
      </View>
    );

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View >
      <Camera  style={{height: '100%'}}type={type}>
        <View >
          <TouchableOpacity
            
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text > Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

 

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
      width: 150,
      borderRadius: 20,
      paddingTop:2.5,
      marginLeft: 5,
      marginRight: 5,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#538233",
    },
    textStyle: {
      color: "white",
        fontWeight: "bold",
        paddingTop: 5,
        paddingLeft: 13,
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
