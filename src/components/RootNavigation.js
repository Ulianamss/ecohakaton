import * as React from 'react';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';

import TabNavigator from './tabNavigation';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'black', // цвет выбранной
      card: '#e9f8df' // цвет самого навигатора
    },
  };

const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;