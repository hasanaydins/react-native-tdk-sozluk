import * as React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchStackScreen from './src/screens/Search';
import BookmarkStackScreen from './src/screens/Bookmark';
import TabBar from './src/components/TabBar';
import OgrenStackScreen from './src/screens/Ogren';
import Theme from './src/utils/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Search'
            tabBar={props => <TabBar {...props} />}
          >
            <Tab.Screen name='Search' component={SearchStackScreen} />
            <Tab.Screen name='Ogren' component={OgrenStackScreen} />
            <Tab.Screen name='Bookmark' component={BookmarkStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
