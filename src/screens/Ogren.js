import { Text, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DetailOgren from './DetailOgren';
import theme from '../utils/theme';
import { useFocusEffect } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import Box from '../components/Box';

const OgrenStack = createStackNavigator();

function OgrenStackScreen() {
  return (
    <OgrenStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.red,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <OgrenStack.Screen name='Öğren' component={Ogren} />
      <OgrenStack.Screen name='Details' component={DetailOgren} />
    </OgrenStack.Navigator>
  );
}

function Ogren() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Home Ogren</Text>
    </Box>
  );
}

export default OgrenStackScreen;
