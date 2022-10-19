import {useEffect, useState} from 'react';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Image,
  ImageResizeMode,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screen/Home';
import Chest from './Screen/Chest';
import Back from './Screen/Back';
import Abs from './Screen/Abs';
import LowerBody from './Screen/LowerBody';
import Shoulder from './Screen/Shoulder';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chest" component={Chest} />
          <Stack.Screen name="Back" component={Back} />
          <Stack.Screen name="Abs" component={Abs} />
          <Stack.Screen name="LowerBody" component={LowerBody} />
          <Stack.Screen name="Shoulder" component={Shoulder} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
