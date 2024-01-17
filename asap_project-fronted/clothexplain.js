import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Calendar } from "react-native-calendars";

const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  // Provide default values if productData is not passed
  const productData = route.params?.productData || {
    userName: "패션왕 이다은",
    location: "경기도 하남시 감일동",
    title: "뽀글이 레더 백팩",
    timeSincePost: "20 minutes ago",
    description: "여성 가방",
    // Add any other properties that are expected to be used
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onDayPress = (day) => {
    // Handle the logic to select start and end date
    // This is a simple example, you might need more complex logic
    setSelectedDates({ [day.dateString]: { selected: true } });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./my-app/assets/AsaP_image/image1.jpg")}
        style={styles.productImage}
      />

      <View style={styles.profileContainer}>
        <Image
          source={require("./my-app/assets/AsaP_image/daeun_img.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{productData.userName}</Text>
          <Text style={styles.profileLocation}>{productData.location}</Text>
        </View>
      </View>
      <Text style={styles.productTitle}>{productData.title}</Text>
      <Text style={styles.productDescription}>{productData.description}</Text>
      <Text style={styles.productTime}>{productData.timeSincePost}</Text>
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          한번도 사용하지 않은 쌔 제품입니다. 대여 가능 날짜는 1월 18일부터
          19일까지로 생각중입니다. 대여가격은 채팅으로 문의주시면 더 자세히
          알려드릴게요. 털 손상이나 색깔 변색시 보상금 발생합니다.
        </Text>
      </View>
      <TouchableOpacity style={styles.purchaseButton} onPress={toggleModal}>
        <Text style={styles.purchaseButtonText}>문의하기</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalView}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={selectedDates}
            // More properties as needed
          />
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text>대여하러 가기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* Description Box */}
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.chatButtonText}>채팅하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: 300, // Adjust the height as needed
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Half the size of width/height to make it circular
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontWeight: "bold",
  },
  profileLocation: {
    color: "grey",
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
  productTime: {
    fontSize: 14,
    color: "grey",
    marginTop: 5,
    marginLeft: 10,
  },
  productDescription: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },
  purchaseButton: {
    backgroundColor: "#F5DEB3",
    borderRadius: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  purchaseButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  descriptionBox: {
    borderWidth: 1,
    borderColor: "#ddd", // Change this color as needed
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  descriptionText: {
    color: "#999", // This is a placeholder text color
    fontSize: 20,
  },
  chatButton: {
    backgroundColor: "#e6daa6", // Example color for chat button
    borderRadius: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  chatButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "auto", // 너비를 자동으로 설정
    height: "auto", // 높이를 자동으로 설정
    justifyContent: "center",
    alignItems: "center",
    // 필요에 따라 패딩이나 여백 조정
  },
  closeButton: {
    backgroundColor: "#ddd",
    padding: 10,
    marginTop: 10,
  },
});

export default ProductScreen;
