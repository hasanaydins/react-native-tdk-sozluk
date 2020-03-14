import { Text, View } from 'react-native';
import * as React from 'react';

function DetailOgren({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail Ogren!</Text>
      {console.log(navigation)}
    </View>
  );
}
export default DetailOgren;
