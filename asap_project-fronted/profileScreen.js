import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ProfileEditScreen = () => {
  const [nickname, setNickname] = useState("");
  const [clothestyle, setclothes] = useState("");

  const handleProfileImagePress = () => {
    // TODO: 프로필 이미지 업로드를 처리하는 로직을 여기에 추가하세요.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>프로필 수정</Text>
      <TouchableOpacity
        onPress={handleProfileImagePress}
        style={styles.profileImageContainer}
      >
        <Image
          source={require("./my-app/assets/AsaP_image/daeun_img.jpg")} // 프로필 기본 이미지 경로
          style={styles.profileImage}
        />
        {/* 이미지 위에 동그란 아이콘을 덧붙이는 부분 */}
        <View style={styles.overlayCameraIcon}>
          <Text style={styles.cameraIconText}>📷</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nicknameInput}>
        <Text>닉네임</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.nicknameInput}
        onChangeText={setNickname}
        value={nickname}
        placeholder="닉네임을 입력해주세요."
      />
      <TouchableOpacity style={styles.nicknameInput}>
        <Text>옷 스타일</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.nicknameInput}
        onChangeText={setclothes}
        value={clothestyle}
        placeholder="나의 옷 스타일을 소개해주세요."
      />
      <TouchableOpacity style={styles.profileButton}>
        <Text>설정 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileImageContainer: {
    marginBottom: 20,
    position: "relative",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  overlayCameraIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
  },
  cameraIconText: {
    fontSize: 16,
  },
  nicknameInput: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 10,
    fontSize: 18,
  },
  profileButton: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    marginTop: 30,
    margin: 3,
    borderRadius: 10,
  },
});

export default ProfileEditScreen;
