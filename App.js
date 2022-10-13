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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

import {theme} from './colors';

const App = () => {
  return (
    <>
      <View style={tw`p-4 bg-red-300 flex-row justify-center flex-shrink-0`}>
        <Text style={tw`text-xl text-[#000]`}>여기는 Header 입니다.</Text>
      </View>
      <ScrollView style={tw`p-4 bg-yellow-300 flex-grow`}>
        <View style={tw`p-4 bg-black w-full h-[130px] mb-5`}></View>
        <View style={tw`p-4 bg-red-500 w-full h-[130px] mb-5`}></View>
        <View style={tw`p-4 bg-orange-500 w-full h-[130px] mb-5`}></View>
        <View style={tw`p-4 bg-blue-500 w-full h-[130px] mb-5`}></View>
        <View style={tw`p-4 bg-black w-full h-[130px] mb-5`}></View>
        <View style={tw`p-4 bg-red-500 w-full h-[130px] mb-5`}></View>
        <View style={tw`p-4 bg-orange-500 w-full h-[130px] mb-5`}></View>
        <View style={tw`p-4 bg-blue-500 w-full h-[130px] mb-5`}></View>
      </ScrollView>
      <View style={tw`p-4 bg-green-500 flex-row justify-center flex-shrink-0`}>
        <Text style={tw`text-xl text-[#000]`}>여기는 Footer 입니다.</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
});

export default App;
