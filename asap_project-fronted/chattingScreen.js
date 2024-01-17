import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  // 여기서 navigation을 제거하세요
} from "react-native";
// 검색 바 컴포넌트

// 제품 아이템 컴포넌트
const ProductItem = ({ id, name, price, likes, image, navigation }) => (
  <View style={styles.productItem}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Chat", {
          id,
          name,
          price,
          likes,
          image,
        })
      }
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Image source={image} style={styles.productImage} />
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <Text style={styles.productLikes}>{likes}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.closetButton}
      onPress={() => navigation.navigate("seecloset", { id, name })}
    >
      <Text style={styles.closetButtonText}>옷장 보러가기</Text>
    </TouchableOpacity>
  </View>
);
// 제품 목록을 위한 플랫리스트 렌더 아이템 함수

// 메인 App 컴포넌트
const App = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ProductItem
      id={item.id}
      name={item.name}
      price={item.price}
      likes={item.likes}
      image={item.image}
      navigation={navigation} // 여기에서 navigation을 전달합니다
    />
  );
  // 샘플 제품 데이터
  const products = [
    {
      id: "1",
      name: "패션왕 이다은",
      price: "대여중: 3, 대여제공: 15",
      likes: "#심플베이직, #유니크",
      image: require("./my-app/assets/AsaP_image/daeun_img.jpg"),
    },
    {
      id: "2",
      name: "이구역의 옷짱은 허나영",
      price: "대여중: 1, 대여제공: 22",
      likes: "#러블리, #오피스룩",
      image: require("./my-app/assets/AsaP_image/nayoung.jpg"),
    },
    {
      id: "3",
      name: "나는야 김김나영",
      price: "대여중: 5, 대여제공: 2",
      likes: "#모던 미니멀, #심플 베이직",
      image: require("./my-app/assets/AsaP_image/nayoung2.jpg"),
    },
    {
      id: "4",
      name: "나는야 이채연",
      price: "대여중: 1, 대여제공: 1",
      likes: "#캐주얼, #심플베이직",
      image: require("./my-app/assets/AsaP_image/chay.jpg"),
    },
  ];
  return (
    <View style={styles.app}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#cccccc",
  },
  productName: {
    // 제품 이름 스타일
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    // 제품 가격 스타일
    fontSize: 16,
    color: "#333333",
    marginVertical: 4,
  },
  productLikes: {
    // 좋아요 수 스타일
    fontSize: 14,
    color: "#666666",
  },
  productList: {
    // 제품 목록 스타일
    marginTop: 10,
  },
  app: {
    // 앱 전체 스타일
    flex: 1,
    backgroundColor: "#F0EDE5",
  },
  productDetails: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  closetButton: {
    // 버튼 스타일은 그대로 유지하거나 필요에 따라 수정할 수 있습니다.
    marginTop: 4, // 버튼을 좀 더 정보 아래에 위치시키기 위해 marginTop을 추가했습니다.
    backgroundColor: "#F0EDE5",
    padding: 10,
    borderRadius: 5,
    marginLeft: -100,
  },
  closetButtonText: {
    color: "black", // 텍스트 색상
    fontWeight: "bold",
  },
});

export default App;
