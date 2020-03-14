import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Input from '../components/Input';
import SvgLogo from '../components/icons/Logo';
import SvgSearch from '../components/icons/Search';
import SvgVoice from '../components/icons/Voice';
import Box from '../components/Box';
import Button from '../components/Button';
import theme from '../utils/theme';
import { Dimensions, StatusBar, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const SearchStack = createStackNavigator();
const dwith = Math.round(Dimensions.get('window').width);
const dheight = Math.round(Dimensions.get('window').height);

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode='none'>
      <SearchStack.Screen name='Search' component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

function SearchScreen() {
  /* const [isFocused, setFocused] = React.useState(false);*/

  return (
    <Box flex={1} as={SafeAreaView} bg='red'>
      <StatusBar barStyle='dark-content' />
      <Box justifyContent='center' flexDirection='row' pt={5} pb={30}>
        <SvgLogo />
      </Box>
      <Box position='relative' mx={29}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.05,
            shadowRadius: 6,
          }}
          bg='white'
          placeholder='Bir kelime veya kelime öbeği giriniz..'
          placeholderTextColor='gray'
          color='gray'
          height={64}
          borderRadius='normal'
          paddingLeft={47}
          /*onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}*/
        />
        <Button position='absolute' left={14} top={21}>
          <SvgSearch color={theme.colors.gray} />
        </Button>
        <Button position='absolute' right={14} top={21} p={0} m={0}>
          <SvgVoice color={theme.colors.red} />
        </Button>
      </Box>

      <Text style={{ fontFamily: 'Poppins-Bold' }}>Haayyyyyaaattoo</Text>
    </Box>
  );
}

export default SearchStackScreen;
