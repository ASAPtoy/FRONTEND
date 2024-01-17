import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ListingForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [transactionMethod, setTransactionMethod] = useState("sell"); // 'sell' or 'share'

  const handleSubmit = () => {
    // Submit logic here
    console.log({ title, price, description, transactionMethod });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>나의 옷 작성하기</Text>
      </View>
      <Text style={styles.sub1title}>사진 추가하기</Text>
      <TouchableOpacity style={styles.uploadButton}>
        {/* Text component within TouchableOpacity for the button text */}
        <Text style={styles.uploadButtonText}>📷</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>제목</Text>
      <TextInput
        style={styles.input}
        placeholder="제목을 입력해주세요."
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.subtitle}>거래 방식</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.transactionButton,
            transactionMethod === "sell" && styles.activeButton,
          ]}
          onPress={() => setTransactionMethod("sell")}
        >
          <Text style={styles.buttonText}>대면 거래</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.transactionButton,
            transactionMethod === "share" && styles.activeButton,
          ]}
          onPress={() => setTransactionMethod("share")}
        >
          <Text style={styles.buttonText}>택배 거래</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>가격 설정</Text>
      <TextInput
        style={styles.input}
        placeholder="가격을 설정해주세요."
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Text style={styles.subtitle}>자세한 설명</Text>
      <TextInput
        style={styles.textArea}
        placeholder="자세한 설명을 입력해주세요. 신뢰할 수 있는 거래를 위해 최대한 자세히 입력해주세요."
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>작성 완료</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    height: 300,
    textAlignVertical: "top",
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  transactionButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: "#e7e7e7",
  },
  uploadButton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: 70, // Square shape
    height: 70, // Square shape
    alignSelf: "center", // Center button horizontally
    marginBottom: 15,
  },

  uploadButtonText: {
    textAlign: "center", // Center text horizontally
    color: "black", // White text color
    fontWeight: "bold",
    fontSize: 50, // Bold text font weight
  },
  submitButton: {
    backgroundColor: "#F0EDE5",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "black",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 1,
  },
  sub1title: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 1,
    textAlign: "center",
    paddingBottom: 3,
  },
});

export default ListingForm;
