import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Button, Text} from 'react-native';
import DetailHome from './DetailHome';
import BoxCenter from '../components/BoxCenter';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
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
      <Text mb={40}>Home screen</Text>
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
    </BoxCenter>
  );
}

export default HomeStackScreen;
