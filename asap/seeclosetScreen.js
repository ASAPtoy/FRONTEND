import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
// 두 컬럼 그리드 레이아웃을 위한 아이템 너비 계산
const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

const products = [
  {
    id: '1',
    name: '뽀글이 레더 백팩',
    price: '1300원',
    description: '따뽀글이 레더콤비 백팩 양털가방 퍼 가방',
    image: require('./assets/AsaP_image/image1.jpg'),
    isAvailable: false,
  },
  {
    id: '2',
    name: '섹시 슬림 골지 미니 원피스',
    price: '2100원',
    description: '반목 폴라 섹시 슬림 골지 미니 원피스',
    image: require('./assets/AsaP_image/image2.jpg'),
    isAvailable: true,
  },
  {
    id: '3',
    name: '양모 골덴 와이드 팬츠',
    price: '1300원',
    description: '양모 와이드 버전 코듀로이 골덴 와이드 팬츠',
    image: require('./assets/AsaP_image/image3.jpg'),
    isAvailable: false,
  },
  {
    id: '4',
    name: '스퀘어넥 라운딩 긴팔티',
    price: '2000원',
    description: '문의 폭주 스퀘어넥 라운딩 긴팔 버전',
    image: require('./assets/AsaP_image/image4.jpg'),
    isAvailable: false,
  },
  {
    id: '5',
    name: '말랑 골덴 와이드 롱 팬츠',
    price: '1800원',
    description: '전직원 소장한 말랑 골덴 와이드 롱 팬츠',
    image: require('./assets/AsaP_image/image5.jpg'),
    isAvailable: false,
  },
  {
    id: '6',
    name: '레더 크롭 패딩 점퍼',
    price: '3400원',
    description: '최저가로 힙걸 완성 가능 레더 크롭 패딩 점퍼 자켓',
    image: require('./assets/AsaP_image/image6.jpg'),
    isAvailable: true,
  },
];

const ProductItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text
        style={[
          styles.rentalStatus,
          item.isAvailable ? styles.available : styles.unavailable,
        ]}>
        {item.isAvailable ? '대여가능' : '대여중'}
      </Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗄️패션왕 이다은님의 옷장🗄️</Text>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    backgroundColor: '#FAFAF8', // 아이보리 색 배경
  },
  itemContainer: {
    width: itemWidth,
    padding: 5,
    backgroundColor: 'white', // 각 아이템 배경색
    borderColor: '#E8E8E8', // 경계선 색
    borderWidth: 1, // 경계선 두께
    borderRadius: 10, // 경계선 둥글기
    margin: 0, // 아이템간의 간격
    elevation: 3, // 안드로이드 전용 그림자 효과
    // iOS 전용 그림자 효과
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: '100%',
    height: 150, // 이 값을 조정하여 이미지의 높이를 변경하세요
    borderRadius: 10, // 이미지 둥글기
  },
  textContainer: {
    padding: 8, // 텍스트 주위 패딩
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    color: '#585858', // 글자색
  },
  itemName: {
    fontSize: 14,
    color: '#303030', // 글자색
    marginTop: 4,
  },
  itemDescription: {
    fontSize: 12,
    color: '#A9A9A9', // 글자색
    marginTop: 4,
  },
  rentalStatus: {
    position: 'absolute',
    top: 10,
    left: 6,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 15,
    overflow: 'hidden',
    fontWeight: 'bold',
    fontSize: 14,
  },
  available: {
    backgroundColor: 'blue',
    color: 'white',
  },
  unavailable: {
    backgroundColor: 'red',
    color: 'white',
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
