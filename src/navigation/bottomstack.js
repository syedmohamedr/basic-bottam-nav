import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import HomeStack from '../navigation/homestack';
import AccountStack from '../navigation/accountstack';
import {NavigationContainer} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeSCreen</Text>
    </View>
  );
};

const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) => (
              <Feather
                name="shopping-bag"
                size={24}
                color="#4a4f51"
                style={{}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name="account"
                size={25}
                color="#4a4f51"
                style={{}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
