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
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

import {theme} from '../colors';

const Home = ({navigation}) => {
  return (
    <>
      <View style={tw`p-4 bg-black flex-row justify-center flex-shrink-0`}>
        <Text style={tw`text-xl text-[#FFF]`}>홈 트레이닝</Text>
      </View>
      <ScrollView style={tw`p-4 bg-white flex-grow`}>
        <TouchableOpacity
          style={styles.HealthBox}
          onPress={() => {
            navigation.navigate('Chest');
          }}>
          <Text style={styles.HealthName}>가슴 운동</Text>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/nPy47T.jpg',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.HealthBox}
          onPress={() => {
            navigation.navigate('Back');
          }}>
          <Text style={styles.HealthName}>등 운동</Text>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/7Ogx5q.jpg',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HealthBox}
          onPress={() => {
            navigation.navigate('Abs');
          }}>
          <Text style={styles.HealthName}>복근 운동</Text>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/6A7Ysc.jpg',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HealthBox}
          onPress={() => {
            navigation.navigate('LowerBody');
          }}>
          <Text style={styles.HealthName}>하체 운동</Text>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/KCtwLO.jpg',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HealthBox}
          onPress={() => {
            navigation.navigate('Shoulder');
          }}>
          <Text style={styles.HealthName}>어깨 운동</Text>
          <Image
            style={styles.HealthImageBox}
            source={{
              uri: 'https://ifh.cc/g/1Fs4bR.jpg',
            }}
          />
        </TouchableOpacity>
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
    position: 'relative',
  },
  HealthImageBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  HealthName: {
    color: 'white',
    fontSize: 30,
    opacity: 0.8,
    fontWeight: '600',
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 1,
  },
});

export default Home;
