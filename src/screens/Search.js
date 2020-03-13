import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DetailSearch from './DetailSearch';

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
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
      <SearchStack.Screen name='Search' component={Search} />
      <SearchStack.Screen name='Details' component={DetailSearch} />
    </SearchStack.Navigator>
  );
}

function Search({ props }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>sd</Text>
    </View>
  );
}

export default SearchStackScreen;
