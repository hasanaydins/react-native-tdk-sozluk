import {Button, Text, View} from 'react-native';
import * as React from 'react';

function DetailHome({route, navigation}) {
  const {itemId} = route.params;
  const {title} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>title: {title}</Text>
      <Button
        title="Go to Details again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default DetailHome;
