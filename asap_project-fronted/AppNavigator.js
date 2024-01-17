import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen"; // SplashScreen 컴포넌트의 경로
import MenuScreen from "./MenuScreen"; // MenuScreen 컴포넌트의 경로
import Item1Screen from "./Item1Screen"; // Item1Screen 컴포넌트의 경로
import Item2Screen from "./Item2Screen"; // Item2Screen 컴포넌트의 경로

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Item1" component={Item1Screen} />
      <Stack.Screen name="Item2" component={Item2Screen} />
      {/* 추가적인 스크린들을 여기에 추가할 수 있습니다 */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
