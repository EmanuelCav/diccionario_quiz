import React from 'react'

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "react-native";

import Container from './Container';
import Home from "./app/screens/Home";
import Categories from "./app/screens/Categories";
import Options from "./app/screens/Options";
import Playing from "./app/screens/Playing";
import Statistics from "./app/screens/Statistics";

import Loading from './app/components/response/Loading'

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

export default function App() {
  return (
    <Container>
      <Loading />
      <NavigationContainer theme={MyTheme}>
        <StatusBar backgroundColor={'#f1889b'} />
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} options={{
            animation: 'flip'
          }} />
          <Stack.Screen name="Playing" component={Playing as any} options={{
            animation: 'flip'
          }} />
          <Stack.Screen name="Options" component={Options} options={{
            animation: 'flip'
          }} />
          <Stack.Screen name="Categories" component={Categories as any} options={{
            animation: 'flip'
          }} />
          <Stack.Screen name="Statistics" component={Statistics} options={{
            animation: 'flip'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}
