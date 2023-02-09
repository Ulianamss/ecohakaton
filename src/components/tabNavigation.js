import React from 'react';
import { Image , StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {WhoAroundPage} from '../pages/whoAroundPage';
import {RoutesPage} from '../pages/routesPage';
import {QrCodePage} from '../pages/qrCodePage';
import {InformationPage} from '../pages/informationPage';
import {CustomerMapPage} from '../pages/customerMapPage';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
 
  return (
    <Tab.Navigator 
      initialRouteName="Routes"
      tabBarOptions={{ showLabel: false }} // Убирает название табов
    >
      <Tab.Screen
        name="CustomerMapPage"
        component={CustomerMapPage}
        options={{
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image style={styles.image} source={require('../../assets/who_around.png')}/>
            );
          },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Routes"
        component={RoutesPage} 
        options={{
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image style={styles.image} source={require('../../assets/routes.png')}/>
            );
          },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="WhoAroundPage" 
        component={WhoAroundPage}
        options={{
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image style={styles.image} source={require('../../assets/qr_code.png')}/>
            );
          },
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="QrCodePage" 
        component={QrCodePage} 
        options={{
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image style={styles.image} source={require('../../assets/information.png')}/>
            );
          },
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="InformationPage" 
        component={InformationPage} 
        options={{
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image style={styles.image} source={require('../../assets/customer_map.png')}/>
            );
          },
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({

  image: {
    width: 30,
    height: 30,
  }

});