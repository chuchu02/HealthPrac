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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

import {theme} from './colors';

const App = () => {
  return (
    <>
      <View style={tw`p-4 bg-black flex-row justify-center flex-shrink-0`}>
        <Text style={tw`text-xl text-[#FFF]`}>홈 트레이닝</Text>
      </View>
      <ScrollView style={tw`p-4 bg-white flex-grow`}>
        <View style={styles.HealthBox}>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/bX8Kmp.jpg',
            }}
          />
        </View>
        <View style={styles.HealthBox}>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/Vs900F.jpg',
            }}
          />
        </View>
        <View style={styles.HealthBox}>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/6A7Ysc.jpg',
            }}
          />
        </View>
        <View style={styles.HealthBox}>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/KCtwLO.jpg',
            }}
          />
        </View>
        <View style={styles.HealthBox}>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/1Fs4bR.jpg',
            }}
          />
        </View>
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
  HealthBox: {
    width: '100%',
    height: 140,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 25,
  },
  HealthImageBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 25,
  },
  HealthName: {
    backgroundColor: 'red',
    color: 'red',
    fontSize: 38,
    fontWeight: '600',
  },
});

export default App;
