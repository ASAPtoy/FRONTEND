import React, { useState } from "react";
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

const Preview = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [transactionMethod, setTransactionMethod] = useState("sell"); // 'sell' or 'share'

  const selectImage = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImageSrc(source);
      }
    });
  };

  const handleSubmit = () => {
    console.log({ title, price, description, transactionMethod });
    // 여기에 제출 로직을 추가할 수 있습니다.
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>나의 옷 작성하기</Text>
      </View>
      <Text style={styles.sub1title}>사진 추가하기</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={selectImage}>
        <Text style={styles.uploadButtonText}>📷</Text>
      </TouchableOpacity>
      <View style={styles.previewContainer}>
        {imageSrc && <Image source={imageSrc} style={styles.previewImage} />}
        {!imageSrc && <Text style={styles.previewText}>사진을 추가하세요</Text>}
      </View>

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
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  uploadButtonText: {
    fontSize: 24,
  },
  previewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 15,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  previewText: {
    color: 'black',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sub1title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Preview;
