import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DetailBookmark from './DetailBookmark';
import theme from '../utils/theme';

const BookmarkStack = createStackNavigator();

function BookmarkStackScreen() {
  return (
    <BookmarkStack.Navigator
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
      <BookmarkStack.Screen name='Bookmark' component={Bookmark} />
      <BookmarkStack.Screen name='Details' component={DetailBookmark} />
    </BookmarkStack.Navigator>
  );
}

function Bookmark({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bookmark screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default BookmarkStackScreen;
