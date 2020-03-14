import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DetailOgren from './DetailOgren';

const OgrenStack = createStackNavigator();

function OgrenStackScreen() {
  return (
    <OgrenStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <OgrenStack.Screen name='Ogren' component={Ogren} />
      <OgrenStack.Screen name='Details' component={DetailOgren} />
    </OgrenStack.Navigator>
  );
}

function Ogren() {
  return (
    <View style={{ flex: 1, justifyContent:"center" }}>
      <Text>Home Ogren</Text>
    </View>
  );
}

export default OgrenStackScreen;
