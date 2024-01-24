// 필요한 import 구문들...
import React, { useState } from 'react';
import { PermissionsAndroid, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MenuItem from './MenuItem';  // 새로운 파일에서 MenuItem import
import { getCurrentLocation } from './handleLocationPress';

// 카카오맵 API 키
const KAKAO_MAP_API_KEY = 'e820c6eddd328d86c2e8f2722faf58b8';
const KIWI_REST_API_KEY = '8794f20102e2badae6bea657a1f616d4';

const getTownName = async (latitude, longitude) => {
  try {
    // 카카오맵 API 호출을 위한 URL
    const apiUrl = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;

    // API 호출
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_MAP_API_KEY}`,
      },
    });

    // API 응답에서 주소 정보 추출
    const addressInfo = response.data.documents[0];
    const townName = addressInfo.address_name;

    return townName;
  } catch (error) {
    console.error('Error getting town name:', error);
    throw error;
  }
};

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [myTown, setMyTown] = useState(null);
  const [coordinate, setCoordinate] = useState(null);
  const [townName, setTownName] = useState(null);
  const [townCode, setTownCode] = useState(null);

  const handleLocationPress = async () => {
    try {
      // 위치 권한 요청
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('위치 권한이 필요합니다.');
          return;
        }
      }

      // 현재 위치 가져오기
      await getCurrentLocation(
        setMyTown,
        setCoordinate,
        async (latitude, longitude) => {
          const town = await getTownName(latitude, longitude);
          setTownName(town);
        },
        setTownCode,
        KIWI_REST_API_KEY
      );
    } catch (error) {
      console.error('Error handling location press:', error);
    }
  };

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
  // 스타일 정의
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
  mannerTemperature: {
    // 매너온도 스타일
  },
  mannerTemperatureText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    // 추가 스타일
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
    // 추가 스타일
  },
  tradingRateValue: {
    fontSize: 16,
    fontWeight: 'bold',
    // 추가 스타일
  },
  infoBox: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  menuSection: {
    // 스타일 지정
  },
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  menuItemText: {
    fontSize: 18,
  },
  separator: {
    height: 2, // 구분선의 높이
    backgroundColor: '#CCCCCC', // 회색 구분선 색상
    width: '100%', // 부모 컨테이너를 꽉 채우기
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row', // 가로 방향으로 정렬
    justifyContent: 'center', // 컨테이너 내부에서 중앙 정렬
    alignItems: 'center', // 세로축 기준 중앙 정렬
    // 필요하다면 여기에 추가적인 스타일링 (예: padding, margin)
  },
});

export default ProfileScreen;
