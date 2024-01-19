import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

// 검색 바 컴포넌트
const SearchBar = () => (
  <View style={styles.searchBar}>
    <TextInput
      placeholder="원하는 옷을 검색해주세요."
      style={styles.searchInput}
    />
  </View>
);
// 제품 아이템 컴포넌트
const ProductItem = ({name, price, likes, state, image}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() =>
        navigation.navigate('clothexplain', {
          name,
          price,
          likes,
          state,
          image,
        })
      } // 여기서 DetailCloth 페이지로 네비게이트
    >
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <Text
          style={[
            styles.productState,
            state === '대여중' ? styles.rented : styles.available,
          ]}>
          {state}
        </Text>
        <Text style={styles.productLikes}>♥좋아요{likes}</Text>
      </View>
      <Image source={image} style={styles.productImage} />
    </TouchableOpacity>
  );
};

// 제품 목록을 위한 플랫리스트 렌더 아이템 함수
const renderItem = ({item}) => (
  <ProductItem
    name={item.name}
    price={item.price}
    likes={item.likes}
    image={item.image}
    state={item.state}
  />
);

// 메인 App 컴포넌트
const App = () => {
  const navigation = useNavigation();
  // 샘플 제품 데이터
  const products = [
    {
      id: '1',
      name: '스퀘어넥 라운딩 긴팔티',
      price: '2000원',
      likes: 2,
      state: '대여중',
      image: require('./assets/AsaP_image/image4.jpg'),
    },
    {
      id: '2',
      name: '양모 골덴 와이드 팬츠',
      price: '1300원',
      likes: 9,
      state: '대여가능',
      image: require('./assets/AsaP_image/image3.jpg'),
    },
    {
      id: '3',
      name: '섹시 슬림 골지 미니 원피스',
      price: '2100원',
      likes: 2,
      state: '대여가능',
      image: require('./assets/AsaP_image/image2.jpg'),
    },
    {
      id: '4',
      name: '뽀글이 레더 백팩',
      price: '1300원',
      likes: 2,
      state: '대여가능',
      image: require('./assets/AsaP_image/image1.jpg'),
    },
    {
      id: '5',
      name: '말랑 골덴 와이드 롱 팬츠',
      price: '1800원',
      likes: 11,
      state: '대여중',
      image: require('./assets/AsaP_image/image5.jpg'),
    },
    {
      id: '6',
      name: '레더 크롭 패딩 점퍼',
      price: '3400원',
      likes: 9,
      state: '대여중',
      image: require('./assets/AsaP_image/image6.jpg'),
    },
    {
      id: '7',
      name: '엔젤 퍼 후드 집업',
      price: '2100원',
      likes: 2,
      state: '대여가능',
      image: require('./assets/AsaP_image/image7.jpg'),
    },
    {
      id: '8',
      name: '투버튼 스판 이너 반바지',
      price: '1100원',
      likes: 2,
      state: '대여중',
      image: require('./assets/AsaP_image/image8.jpg'),
    },
  ];
  return (
    <View style={styles.app}>
      <SearchBar />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Board')} // 여기서 BoardScreen으로 네비게이트
      >
        <Text style={styles.addButtonText}>+글쓰기</Text>
      </TouchableOpacity>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  searchBar: {
    // iOS 스타일 검색 바
    backgroundColor: '#F0EDE5',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    // iOS 스타일 검색 입력창
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    height: 36,
  },
  productItem: {
    flexDirection: 'row', // 항목을 가로로 배열합니다.
    justifyContent: 'space-between', // 세부 정보와 이미지를 양쪽 끝으로 정렬합니다.
    alignItems: 'center', // 세로 축(center)을 기준으로 아이템을 중앙 정렬합니다.
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cccccc',
  },
  productName: {
    // 제품 이름 스타일
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    // 제품 가격 스타일
    fontSize: 16,
    color: '#333333',
    marginVertical: 4,
    fontWeight: 'bold',
  },
  productLikes: {
    // 좋아요 수 스타일
    fontSize: 14,
    color: '#666666',
  },
  productState: {
    fontSize: 14,
    // 기본 색상은 여기서 설정하거나 아래와 같이 상태에 따라 동적으로 변경할 수 있습니다.
  },
  rented: {
    color: 'red', // 대여중일 때의 색상
  },
  available: {
    color: 'blue', // 대여 가능일 때의 색상
  },
  productList: {
    // 제품 목록 스타일
    marginTop: 10,
  },
  app: {
    // 앱 전체 스타일
    flex: 1,
    backgroundColor: '#F0EDE5',
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
  },
  addButton: {
    position: 'absolute', // 버튼을 화면에 고정
    right: 30, // 오른쪽에서 30px 떨어짐
    bottom: 30, // 아래쪽에서 30px 떨어짐
    backgroundColor: '#F0EDE5', // 버튼 배경색
    borderRadius: 30, // 동그란 버튼 형태
    width: 80, // 너비 100
    height: 40, // 높이 100
    justifyContent: 'center', // 안의 텍스트를 중앙에 위치
    alignItems: 'center', // 중앙 정렬
    elevation: 8, // 안드로이드에서 그림자 효과
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: {width: 0, height: 2}, // 그림자 위치
    shadowOpacity: 0.25, // 그림자 투명도
    shadowRadius: 3.84, // 그림자 반경
  },
  addButtonText: {
    color: 'gray', // 텍스트 색상
    fontSize: 16, // 폰트 크기
    textAlign: 'center',
    fontWeight: 'bold', // 텍스트 중앙 정렬
  },
});

export default App;
