import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView, StyleSheet, View, Button, Alert, Modal, Text, Image, Pressable ,TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import RouterElement from '../components/routElement';
import { routeInfo } from '../common/routeMap';



export const RoutesPage = (props) => {
    const [modalVisible, setModalVisible] = useState (false)
    const [isSelected, setSelection] = useState(false)
    const [isLevelAverageSelected, setLevelAverageSelection] = useState(false)
    const [isLevelHardSelected, setLevelHardSelection] = useState(false)
    const [infoModal, setInfoModal] = useState (false)
    const [routeDataInfo, setrouteDataInfo] = useState (false)
    const [filtredRoutes, setFiltredRoutes] = useState(routeInfo)
  
   function filterRoutes(searchString){
    setFiltredRoutes( routeInfo.filter(rout => rout.name.toLowerCase().includes(searchString.toLowerCase()))   ) 
  }  

        function  setInformationRoute(route){

          setrouteDataInfo ({
            infoRout: route.description,
            lvlRout: route.lvlRout,
            kmRout: route.length
          });
          setInfoModal(!infoModal)

          console.log
            }  
   
         return (
            <ScrollView >
              <View style={styles.filters}>
              <SafeAreaView>
              <TextInput
                style = {styles.input}
                placeholder="Поиск"
                onChangeText = {searchString => filterRoutes(searchString)}
              />
              </SafeAreaView>

                <TouchableOpacity onPress = { ()=> setModalVisible(!modalVisible)}>
                        <View style={styles.buttonMenu} >
                        <Image style={styles.image} source={require("../../assets/menu.png")}/>
                        </View>
                         </TouchableOpacity>
                </View>
                <View style={styles.route}>
                {   
                filtredRoutes.map (route =>{ 
                  const selectedLvl = []
                  if (isSelected) {selectedLvl.push(0)}
                  if (isLevelAverageSelected) {selectedLvl.push(1)}
                  if (isLevelHardSelected) {selectedLvl.push(2)}
                  if (selectedLvl.length>0)  {
                    if (selectedLvl.includes(route.lvlRout)){
                    return <RouterElement routeData={route} onHandlePress ={ ( ) => setInformationRoute(route)} ></RouterElement>
                    
                  }
                }
                  else {return <RouterElement routeData={route} onHandlePress = { () => setInformationRoute(route)}></RouterElement>}
  
                  
              
                } )

                }
                </View>
                

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        dismiss={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Выберите уровень сложности маршрута</Text>
                            

                                 <View style={styles.checkboxContainer}>
                                 <BouncyCheckbox
                                 fillColor="green"
                                 unfillColor="#FFFFFF"
                                 isChecked={isSelected}
                                 onPress={setSelection}
                                 style={styles.checkbox}
                                 />
                                <Text style={styles.label}>Лёгкий уровень</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                 <BouncyCheckbox
                                 fillColor="green"
                                 unfillColor="#FFFFFF"
                                 isChecked={isLevelAverageSelected}
                                 onPress={setLevelAverageSelection}
                                 style={styles.checkbox}
                                 />
                                <Text style={styles.label}>Средний уровень</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                 <BouncyCheckbox
                                 fillColor="green"
                                 unfillColor="#FFFFFF"
                                 isChecked={isLevelHardSelected}
                                 onPress={setLevelHardSelection}
                                 style={styles.checkbox}
                                 />
                                <Text style={styles.label}>Сложный уровень</Text>
                                </View>
                                <View    style={styles.buttonBlock}>
                                  <View  style={styles.button}>
                            <Button 
                            title = "закрыть"
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            </Button >
                            </View>
                            </View>
                        </View>
                    </Modal>


                              <Modal
                                animationType="slide"
                                transparent={true}
                                visible={infoModal}
                                dismiss={() => {
                                Alert.alert("Modal has been closed.");
                                setInfoModal(!infoModal);
                                }}
                            >
                             <View style={styles.movalViewInfo}> 
                             <Text style={styles.baseText}> 
                              <Text style={{fontWeight: 'bold'}}>Информация:</Text> {routeDataInfo.infoRout};
                             </Text>
                             <Text style={styles.baseText}>   
                             <Text style={{fontWeight: 'bold'}}>Сложность:</Text> {routeDataInfo.lvlRout };
                            </Text>
                              
                            <Text style={styles.baseText}> <Text style={{fontWeight: 'bold'}}>Длительность:</Text> {routeDataInfo.kmRout};
                             </Text>


                            <View  style={styles.button}>
                            <Button 
                            title = "закрыть"
                            onPress={() =>  setInfoModal(!infoModal)}
                            >
                            </Button >
                            </View>  
                            </View>   
                            </Modal>
                  
                      </View> 
                      </ScrollView>
                            
                        )
                    }

                    

    const styles = StyleSheet.create({
        container: {
            flex: 10,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        title: {
            textAlign: 'center',
            marginVertical: 400,
            marginBottom: 20,

          },
        button: {
         
          justifyContent: 'space-between',
          marginBottom: 20,  
          marginHorizontal: 10,
    
          
        },
        buttonBlock: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,  
          textAlign: "center",
          

        },
        baseText: {
          fontSize: 18,
          width: '100%',
          padding: 10,
          marginBottom: 20, 
          marginVertical: 5,
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",

          },
          textStyle: {
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18,
            
          },
          buttonOpen: {
            backgroundColor: "#F194FF",
          },
          buttonClose: {
            backgroundColor: "#2196F3",
          },
          // из-за него кнопки вверху
          centeredView: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 20,
          
          },
          modalView: {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 170,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 15,
            width: 350,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
          movalViewInfo: {
            marginLeft: 20,
            marginRight: 20,
            marginTop: 170,
            backgroundColor: "white",
            borderRadius: 20,
            paddingLeft: 0,
            width: 350,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
          checkboxContainer: {
            flexDirection: 'row',
            marginBottom: 25  ,
            alignSelf: "flex-start"
          },
          checkbox: {
            alignSelf: "center",
             marginBottom: 18,
             
          },
          label: {
            fontSize: 18,
            fontWeight: "bold",
            alignItems: 'center',
            justifyContent: 'center', 
            marginBottom: 20, 
            alignSelf: 'center',
            marginHorizontal: 5,
           
            
          },
          
        RouterElement: {
          color: "red",
          fontWeight: "bold",
          textAlign: "center"


        },
              
                buttonMenu: {
                  width: 100,
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',  
                  marginTop: 60,
                  },
                  filters:{
                    width: 100,
                    height: 100,
                    alignItems: 'right',
                  },
                  image: {
                    width: 60,
                    height: 60,
                    
                    
                  },
                  input: {
                    width: 250,
                    marginTop: 60,
                    marginLeft: 15,
                    height: 50,
                    borderStyle: 'solid',
                    borderBottomWidth: 2,
                    borderBottomColor: '#3949ab',
                    fontSize: 18,
                    fontWeight: "bold",
                    
                    
                  },
                  filters: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,  
                  },
                  route: {
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 20,  
                  },

    })

