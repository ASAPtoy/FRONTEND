import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";

import {
  login,
  logout,
  getProfile,
} from "@react-native-seoul/kakao-login/native";

const App = () => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAgree, setIsAgree] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalVisible(!isLoginModalVisible);
  };

  const toggleSignUpModal = () => {
    setSignUpModalVisible(!isSignUpModalVisible);
  };

  const toggleCheckbox = () => {
    setIsAgree(!isAgree);
  };

  const signInWithKakao = async () => {
    try {
      const token = await login();
      console.log("Kakao Login Token:", token);
      // 로그인 성공 후 로직 추가
    } catch (err) {
      console.error("Kakao Login Error:", err);
    }
  };

  const signOutWithKakao = async () => {
    try {
      const message = await logoutWithKakao();
      console.log("Kakao Logout Message:", message);
      // 로그아웃 성공 후 로직 추가
    } catch (err) {
      console.error("Kakao Logout Error:", err);
    }
  };

  const getProfile = async () => {
    try {
      const profile = await getKakaoProfile();
      console.log("Kakao Profile:", profile);
      // 프로필 조회 성공 후 로직 추가
    } catch (err) {
      console.error("Kakao Profile Error:", err);
    }
  };

  // 나머지 함수들도 필요에 따라 추가

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/adaptive-icon.png")}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.kakaoButton} onPress={signInWithKakao}>
        <Text style={styles.buttonText}>Kakao로 시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.naverButton}>
        <Text style={styles.buttonText}>Naver로 시작하기</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={toggleLoginModal}>
          <Text style={styles.text}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleSignUpModal}>
          <Text style={styles.text}>회원가입</Text>
        </TouchableOpacity>
      </View>

      {/* Login Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLoginModalVisible}
        onRequestClose={toggleLoginModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* App Logo */}
            <Image
              source={require("./assets/adaptive-icon.png")}
              style={styles.modalLogo}
            />
            {/* Username Input */}
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="아이디 입력"
            />
            {/* Password Input */}
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="비밀번호 입력"
              secureTextEntry={true}
            />
            {/* Confirm Button */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                // Handle the login logic
                console.log(username, password);
                toggleLoginModal();
              }}
            >
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Sign Up Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSignUpModalVisible}
        onRequestClose={toggleSignUpModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* App Logo */}
            <Image
              source={require("./assets/adaptive-icon.png")}
              style={styles.modalLogo}
            />
            {/* Username Input */}
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="아이디 입력"
            />
            {/* Password Input */}
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="비밀번호 입력"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="비밀번호 확인"
            />
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="이름(닉네임)"
            />

            {/* ... Add sign-up form fields similar to login ... */}
            <View style={styles.termsContainer}>
              <TouchableOpacity
                onPress={toggleCheckbox}
                style={styles.checkbox}
              >
                {isAgree && <View style={styles.checkboxChecked} />}
              </TouchableOpacity>
              <Text style={styles.termsText}>
                회원가입 및 이용약관에 동의하겠습니까?
              </Text>
            </View>
            {/* Confirm Button */}
            <TouchableOpacity
              style={[styles.confirmButton, !isAgree && styles.disabledButton]}
              onPress={() => {
                if (isAgree) {
                  // Handle the sign-up logic
                  console.log(username, password);
                  toggleSignUpModal();
                }
              }}
              disabled={!isAgree}
            >
              <Text style={styles.confirmButtonText}>가입하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0EDE5",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 60,
  },
  kakaoButton: {
    backgroundColor: "#FEE500",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  naverButton: {
    backgroundColor: "#1EC800",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  text: {
    color: "#000",
    padding: 10,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalLogo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 12,
    width: "100%",
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: "#F0EDE5",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  confirmButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checkboxChecked: {
    height: 14,
    width: 14,
    backgroundColor: "#000",
  },
  termsText: {
    flex: 1,
    // Add styles for your terms text here
  },
  disabledButton: {
    backgroundColor: "#ccc",
    // Add styles for your disabled button state here
  },
});

export default App;
