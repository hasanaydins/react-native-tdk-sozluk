import * as React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchStackScreen from './src/screens/Search';
import BookmarkStackScreen from './src/screens/Bookmark';
import TabBar from './src/components/TabBar';
import Box from './src/components/Box';
import { SafeAreaView } from 'react-native';
import OgrenStackScreen from './src/screens/Ogren';
import Theme from './src/utils/theme';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box flex={1} as={SafeAreaView}>
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
      </Box>
    </ThemeProvider>
  );
}
