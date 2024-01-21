import React from 'react';
import {useNavigation} from '@react-navigation/native'; // 네비게이션 훅 임포트
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation(); // 네비게이션 훅 사용

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
            onPress={() => navigation.navigate('profile')} // Login 스크린으로 이동
          >
            <Text>프로필 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('login')} // Login 스크린으로 이동
          >
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('location')} // Login 스크린으로 이동
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

const MenuItem = ({title}) => (
  <View style={styles.menuItem}>
    <Text style={styles.menuItemText}>{title}</Text>
  </View>
);

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
  // ... 추가 스타일 정의
});

export default ProfileScreen;
