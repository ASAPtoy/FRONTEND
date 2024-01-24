import React, { useState, useEffect } from 'react';
import { Alert, Button, Text, View, Image, ScrollView, TouchableOpacity, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import MenuItem from './MenuItem';

const KAKAO_MAP_API_KEY = 'e820c6eddd328d86c2e8f2722faf58b8';

const getTownName = async (latitude, longitude) => {
  try {
    const apiUrl = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_MAP_API_KEY}`,
      },
    });

    const addressInfo = response.data.documents[0];
    const townName = addressInfo.address_name;

    return townName;
  } catch (error) {
    console.error('Error getting town name:', error);
    throw error; // 에러를 다시 던져서 상위 호출자에게 전달
  }
};

const ProfileScreen = () => {
  const [myTown, setMyTown] = useState(null);
  const [coordinate, setCoordinate] = useState(null);
  const [townName, setTownName] = useState(null);
  const [townCode, setTownCode] = useState(null);

  const handleLocationPress = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('위치 권한이 필요합니다.');
          return;
        }
      }

      await getCurrentLocation();
    } catch (error) {
      console.error('Error handling location press:', error);
      Alert.alert('위치 정보를 가져오는데 실패했습니다.');
    }
  };

  const getCurrentLocation = async () => {
    try {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCoordinate({ latitude, longitude });
          getTown(latitude, longitude);
        },
        error => {
          console.error('Error getting current location:', error);
          Alert.alert('위치 정보를 가져오는데 실패했습니다.');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (error) {
      console.error('Error getting current location:', error);
      Alert.alert('위치 정보를 가져오는데 실패했습니다.');
    }
  };

  const getTown = async (latitude, longitude) => {
    try {
      const town = await getTownName(latitude, longitude);
      setTownName(town);
    } catch (error) {
      console.error('Error getting town:', error);
      Alert.alert('위치 정보를 가져오는데 실패했습니다.');
    }
  };

  useEffect(() => {
    // 여기서 초기 로딩 시 위치 정보를 가져올 수 있습니다.
    // getCurrentLocation();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('./assets/AsaP_image/daeun_img.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>이다은님의 계정</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('profile')}
          >
            <Text>프로필 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('login')}
          >
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={handleLocationPress}
          >
            <Text>위치인증</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
      </View>

      <View style={styles.mannerTemperature}>
        <Text style={styles.mannerTemperatureText}>매너온도</Text>
      </View>

      <View style={styles.tradingRates}>
        <View style={styles.tradingRateItem}>
          <Text style={styles.tradingRateTitle}>재거래 희망률</Text>
          <Text style={styles.tradingRateValue}>❤80%</Text>
        </View>
        <View style={styles.tradingRateItem}>
          <Text style={styles.tradingRateTitle}>응답률</Text>
          <Text style={styles.tradingRateValue}>💬90%</Text>
        </View>
      </View>
      <View style={styles.separator} />

      <View style={styles.infoBox}>
        <Text>상품권 미인증, 경기도 하남시 미인증 등의 정보</Text>
      </View>

      <View style={styles.menuSection}>
        <MenuItem title="🎖 활동 배지" />
        <MenuItem title="👖 대여중인 옷" />
        <MenuItem title="🩳 대여제공 옷" />
        <MenuItem title="🧧 받은 매너" />
        <MenuItem title="✍ 받은 거래 후기" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE5',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    marginTop: 10,
    margin: 3,
    borderRadius: 10,
  },
  mannerTemperature: {},
  mannerTemperatureText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tradingRates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  tradingRateItem: {
    alignItems: 'center',
  },
  tradingRateTitle: {
    fontSize: 16,
  },
  tradingRateValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoBox: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  menuSection: {},
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  menuItemText: {
    fontSize: 18,
  },
  separator: {
    height: 2,
    backgroundColor: '#CCCCCC',
    width: '100%',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
