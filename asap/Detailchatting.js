import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// 채팅 메시지 컴포넌트
const ChatMessage = ({ message, isMe }) => (
  <View
    style={[
      styles.messageRow,
      isMe ? styles.myMessageRow : styles.otherMessageRow,
    ]}
  >
    <View
      style={[
        styles.messageBubble,
        isMe ? styles.myMessageBubble : styles.otherMessageBubble,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          isMe ? styles.myMessageText : styles.otherMessageText,
        ]}
      >
        {message}
      </Text>
    </View>
  </View>
);

// 메인 채팅 앱 컴포넌트
const ChatApp = () => {
  const [messages, setMessages] = useState([]); // 채팅 메시지 상태
  const [inputText, setInputText] = useState(""); // 입력 필드 상태

  // 메시지 전송 함수
  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      // 메시지 목록에 새 메시지 추가
      setMessages([
        ...messages,
        { key: `${messages.length}`, text: inputText, sentByMe: true },
      ]);
      setInputText(""); // 입력 필드 초기화
    }
  };

  // 메시지 렌더 함수
  const renderMessage = ({ item }) => (
    <ChatMessage message={item.text} isMe={item.sentByMe} />
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.chatHeader}>
        채팅방에서 바로 송금 할 수 있어요. 금융 사기,계좌 이체를 조심하세요.
        금융 범죄의 대상이 될 수 있습니다.
      </Text>
      {/* 새로 추가한 부분 */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.key}
        style={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={inputText}
          onChangeText={setInputText}
          placeholder="메시지를 입력하세요..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>보내기</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesList: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  inputField: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginRight: 10,
    marginBottom: 30,
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 30,
  },
  sendButtonText: {
    color: "#007bff",
  },
  messageRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "flex-end",
  },
  myMessageRow: {
    justifyContent: "flex-end",
  },
  otherMessageRow: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    borderRadius: 20,
    padding: 10,
    maxWidth: "80%",
  },
  myMessageBubble: {
    backgroundColor: "#007bff",
  },
  otherMessageBubble: {
    backgroundColor: "#e5e5ea",
  },
  messageText: {
    fontSize: 16,
  },
  myMessageText: {
    color: "white",
  },
  otherMessageText: {
    color: "black",
  },
  chatHeader: {
    padding: 20,
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ChatApp;
