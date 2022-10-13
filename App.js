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

const STORAGE_KEY = '@toDos';

const App = () => {
  return (
    <View style={tw`p-4 android:pt-2 bg-red-300 flex-row`}>
      <Text style={tw`text-2xl`}>Hey there!</Text>
    </View>
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
