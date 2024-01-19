import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyAccountScreen from './MyAccountScreen';
import ClosetFinderScreen from './ClosetFinderScreen';
import SettingsScreen from './SettingsScreen';
import loginScreen from './loginScreen';
import BoardScreen from './BoardScreen';
import profileScreen from './profileScreen';
import Detailchatting from './Detailchatting';
import chattingScreen from './chattingScreen';
import seeclosetScreen from './seeclosetScreen';
import clothexplain from './clothexplain';
import {AppRegistry} from 'react-native';
import App from './App';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ClosetFinder" component={ClosetFinderScreen} />
      <Tab.Screen name="chatting" component={chattingScreen} />
      <Tab.Screen name="MyAccount" component={MyAccountScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AsaP!</Text>
      <Text style={styles.subtitle}>AsaP에서 옷장을 공유하세요.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Board" component={BoardScreen} />
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="profile" component={profileScreen} />
        <Stack.Screen name="Chat" component={Detailchatting} />
        <Stack.Screen name="seecloset" component={seeclosetScreen} />
        <Stack.Screen name="clothexplain" component={clothexplain} />

        {/* 기존의 다른 Stack.Screen 요소들은 여기에 추가 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#001f3f',
  },
  subtitle: {
    fontSize: 18,
    color: '#001f3f',
  },
  buttonText: {
    color: 'black', // 버튼 텍스트 색상
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'column', // 버튼들을 가로로 배치
    alignItems: 'center',
    justifyContent: 'space-around', // 버튼 사이에 공간을 균등하게 배분
  },
  button: {
    backgroundColor: '#F0EDE5', // 버튼 배경색
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderBottomWidth: 1, // 하단 경계선 두께
    borderBottomColor: 'gray', // 하단 경계선 색상
  },
});

AppRegistry.registerComponent('asap', () => MyApp);
