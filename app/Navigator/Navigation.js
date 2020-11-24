import React from 'react';
import {StyleSheet, View, Text, Keyboard, Button, StatusBar, FlatList,Image, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import NewMeimoScreen from '../screens/NewMeimoScreen'
import DetailScreen from '../screens/DetailScreen'
import SettingScreen from '../screens/SettingScreen'


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
        initialRouteName="Home"
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
              name="Home" 
              component={HomeScreen} 
              options={{ 
                //title: 'Panda Village'
              }}  
        />
        <MainStack.Screen 
              name="Detail" 
              component={DetailScreen} 
              options={{ 
                //title: 'Panda Village'
              }}  
        />

        <MainStack.Screen 
              name="Setting" 
              component={SettingScreen} 
              options={{ 
                //title: 'Panda Village'
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
            headerTitle:
            <Image
              source={require('../assets/Bamboo.png')}
              style={styles.buttonImageNewMeimo}
            />,
            headerBackTitleStyle: {color:'white'},
            headerTintColor: 'white',
            headerRight: () => (
              <Button
                onPress={() => Keyboard.dismiss()}
                title="Done"
                color="#0583F2"
              />
            ),
          }}
        />
        <RootStack.Screen 
          name="Main" 
          component={MainStackScreen} 
          options={{ 
            //title: 'Panda Village'
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