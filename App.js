import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import{NavigationContainer}from "@react-navigation/native"
import{createStackNavigator}from "@react-navigation/stack"

import{ Home,OrderDelivery,Restaurant}from "./screens"
import Tabs from './navigation/tabs';

const Stack=createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
      screenOptions={{
        headerShown:false,
        headerStatusBarHeight:true,
      }}
      initialRouteName="Home"
     >
       <Stack.Screen name="Home" component={Tabs} />
       <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
       <Stack.Screen name="Restaurant" component={Restaurant} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}


