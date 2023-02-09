import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const RouterElement = (props) => {
    return (
         <TouchableOpacity
         onPress={() => props.onHandlePress()}>
            <View style={styles.block}>
                <Image style={styles.imageRout} source = {props.routeData.image } ></Image>
                <Text style={styles.baseText}> {props.routeData.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default RouterElement;

const styles = StyleSheet.create({

    imageRout: {
        width: 400,
        height: 160,
        marginBottom: 10,
      },
      nameRout: {
        width: 150,
        height: 150,
        color: "black",
        textAlign: "center",
        marginBottom: 30,
      },
      block: {
        marginBottom: 10,
      },
      baseText:{
          fontSize: 14,
          fontWeight: "bold",
          textAlign: 'center'
        },
  });