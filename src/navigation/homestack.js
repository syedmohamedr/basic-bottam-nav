import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeSCreen from '../screen/home';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={false}>
      <Stack.Screen name="Home" component={HomeSCreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
