import React from 'react';
import {StyleSheet, View, Text, Keyboard, Button, StatusBar, FlatList, Image, TouchableOpacity, Alert} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import NewMeimoScreen from '../screens/NewMeimoScreen'
import DetailScreen from '../screens/DetailScreen'
import SettingScreen from '../screens/SettingScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'

const Navigation = () => {

  const RootStack = createStackNavigator();
  const MainStack = createStackNavigator();

  /* Routes 
  *  RootStack->NewMeimoScreen
  *  RootStack->MainStack->DetailScreen
  *  RootStack->MainStack->MainScreen
  */

  const MainStackScreen = () => {
    return(
      <MainStack.Navigator
        initialRouteName="Login"
        mode="card"
        screenOptions= {{
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: '#2F3138',
          },
          headerShown: true,
          title:'',
          headerTransparent:true
        }}
        
      >
        <MainStack.Screen 
              name="Register" 
              component={RegisterScreen} 
              options={{ 
                headerLeft: null
              }}  
        />
        <MainStack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ 
                headerLeft: null
              }}  
              initialParams={{reset:0}}
        />
        <MainStack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ 
                headerLeft: null
              }}  
        />
        <MainStack.Screen 
              name="Detail" 
              component={DetailScreen} 
              options={{ 
                headerLeft: null
              }}  
        />

        <MainStack.Screen 
              name="Setting" 
              component={SettingScreen} 
              options={{ 
                headerLeft: null
              }}  
        />
    
      </MainStack.Navigator>
    );
  }

  return(
    <NavigationContainer>
      
      <RootStack.Navigator 
        mode="modal"
        initialRouteName="Main"
        screenOptions= {{
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: '#2F3138',
          },
          headerShown: true,
          title:'',
          headerTransparent:true
        }}
      >
        <RootStack.Screen 
          name="NewMeimo" 
          component={NewMeimoScreen} 
          options={{ 
            headerLeft: null
          }}
        />
        <RootStack.Screen 
          name="Main" 
          component={MainStackScreen} 
          options={{ 
          }}  
        />

      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  buttonImageNewMeimo: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    //backgroundColor: 'blue'
  },
});

export default Navigation;
