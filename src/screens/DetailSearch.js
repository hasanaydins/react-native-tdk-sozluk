import {Text, View} from 'react-native';
import * as React from 'react';

function DetailSearch({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Detail Search!</Text>
      {console.log(navigation)}
    </View>
  );
}
export default DetailSearch;
