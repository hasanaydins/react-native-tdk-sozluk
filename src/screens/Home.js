import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Button, Text, View, StatusBar, TouchableHighlight} from 'react-native';
import DetailHome from './DetailHome';
import Box from '../components/Box';
import BoxCenter from '../components/BoxCenter';
import {Heart, Send} from '../components/icons';

import Icon from 'react-native-vector-icons/AntDesign';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Details"
        component={DetailHome}
        options={({navigation, route}) => ({
          headerBackTitle: 'Geri Dön',
          title: route.params.paramHeader,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <BoxCenter>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            paramID: 86,
            paramDesc: 'anything you want here',
            paramHeader: 'Custom profile header',
          });
        }}
      />
      <Icon name="star" size={30} color="#900" />

      <Box size={30} bg="blue" mt={2} />
      <Heart width={40} height={40} stroke="black" strokeWidth={2} />
      <Send fill="black" width={40} height={40} />
    </BoxCenter>
  );
}

export default HomeStackScreen;
