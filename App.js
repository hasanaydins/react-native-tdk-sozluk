import * as React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/screens/Home';
import ProfileStackScreen from './src/screens/Profile';
import TabBar from './src/components/TabBar';
import Box from './src/components/Box';
import {SafeAreaView} from 'react-native';
import SearchStackScreen from './src/screens/Search';
import Theme from './src/utils/theme';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Search" component={SearchStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}
