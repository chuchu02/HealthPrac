import {useEffect, useState} from 'react';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageResizeMode,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import GifImage from '@lowkey/react-native-gif';
import tw from 'twrnc';

import {theme} from '../colors';

const Chest = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="back" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Icon name="home" size={50} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.ExnameBox}>
          <Text style={styles.Exname}>가슴운동 {'>'} 푸쉬업</Text>
        </View>
        <View style={styles.VideoBox}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://blog.kakaocdn.net/dn/cOoVu0/btqPC2gbBh6/78LDbAKRxVohMJfBxgGG10/img.gif',
            }}
          />
        </View>
        <View style={styles.SubMenu}>
          <TouchableOpacity style={styles.SubMenu2}>
            <Text style={styles.SubmenuText}>운동방법</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SubMenu2}>
            <Text style={styles.SubmenuText}>주의사항</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Submenu3}>
          <Text style={styles.SubmenuText2}>
            1. 팔을 어깨너비보다 조금 넓게 벌려 바닥을 짚는다.
          </Text>
          <Text style={styles.SubmenuText2}>
            2. 호흡을 들이마시면서 천천히 팔꿈치를 굽힌다.
          </Text>
          <Text style={styles.SubmenuText2}>
            3. 가슴과 바닥 사이가 주먹 하나 정도에서 잠시 정지한 후 운동 부위
            자극에 집중한다.
          </Text>
          <Text style={styles.SubmenuText2}>
            4. 호흡을 내쉬면서 시작 위치로 올라온다.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    fontSize: 25,
    color: 'white',
    backgroundColor: '#00CCFF',
  },
  ExnameBox: {
    width: '100%',
  },
  Exname: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  VideoBox: {
    flex: 0.5,
  },
  SubMenu: {
    flex: 0.1,
    flexDirection: 'row',
    width: '100%',
  },
  SubMenu2: {
    width: '50%',
    height: '100%',
    backgroundColor: '#333333',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubmenuText: {
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
  },
  Submenu3: {
    flex: 0.4,
  },
  SubmenuText2: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default Chest;
