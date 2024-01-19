import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/AsaP_image/daeun_img.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>이다은님의 계정</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>➕충전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>➕계좌송금</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuList}>
        <Text style={styles.letterContainer}>나의 거래</Text>
        <MenuItem title="💗 관심목록" />
        <MenuItem title="👕 관심옷장목록" />
        <MenuItem title="🛒 대여내역" />
        <MenuItem title="🗒 나의대여제공내역" />
        <MenuItem title="🧾 가계부" />
        <Text style={styles.letterContainer}>기타</Text>
        <MenuItem title="🇬🇸 내 동네 설정" />
        <MenuItem title="🚩 동네 인증하기" />
        <MenuItem title="⏰ 키워드 알람 설정" />
        <MenuItem title="👥 친구관리" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({title}) => (
  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuItemText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE5',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
  menuList: {
    marginTop: 10,
  },
  menuItem: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 18,
  },
  letterContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 21,
    marginTop: 5,
    marginBottom: 5,
  },
  separator: {
    height: 2, // 구분선의 높이
    backgroundColor: '#CCCCCC', // 회색 구분선 색상
    width: '100%', // 부모 컨테이너를 꽉 채우기
    marginTop: 5,
  },
});

export default AccountScreen;
