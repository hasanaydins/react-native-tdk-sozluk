import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Input from '../components/Input';
import SvgLogo from '../components/icons/Logo';
import SvgSearch from '../components/icons/Search';
import SvgVoice from '../components/icons/Voice';
import SvgDots from '../components/icons/Dots';
import Box from '../components/Box';
import Button from '../components/Button';
import theme from '../utils/theme';
import { Dimensions, StatusBar, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';
import DoSearch from '../screens/DoSearch';

const SearchStack = createStackNavigator();
const dwith = Math.round(Dimensions.get('window').width);
const dheight = Math.round(Dimensions.get('window').height);

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode='none'>
      <SearchStack.Screen name='Search' component={SearchScreen} />
      <SearchStack.Screen name='DoSearch' component={DoSearch} />
    </SearchStack.Navigator>
  );
}

function SearchScreen({ navigation }) {
  const [isFocused, setFocused] = React.useState(false);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <Box flex={1} as={SafeAreaView} bg={theme.colors.red}>
      {/*// LOGO  */}
      <Box justifyContent='center' flexDirection='row' pt={5} pb={30}>
        <SvgLogo />
      </Box>
      {/*// LOGO  */}
      {/*// INPUT  */}
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
          onFocus={() => setFocused(true) && DoSearch}
          onBlur={() => setFocused(false)}
        />
        <Button position='absolute' left={14} top={21}>
          <SvgSearch color={theme.colors.gray} />
        </Button>
        <Button position='absolute' right={14} top={21} p={0} m={0}>
          <SvgVoice color={theme.colors.red} />
        </Button>
      </Box>
      {/*// INPUT  */}

      {/*// Arama gecmisi  */}
      <Box
        height={300}
        bg='#F9F9F9'
        flex={1}
        borderTopLeftRadius={23}
        borderTopRightRadius={23}
        mt={40}
      >
        <Box
          flexDirection='row'
          alignContent='center'
          justifyContent='space-between'
          mt={25}
          mx={30}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
            }}
          >
            Son Aramalar
          </Text>
          <Button>
            <SvgDots color='black' />
          </Button>
        </Box>
        <Button
          onPress={() => navigation.navigate('DoSearch')}
          flex={1}
          justifyContent='center'
        >
          <Text>Go to DO search</Text>
        </Button>
      </Box>
    </Box>
  );
}

export default SearchStackScreen;
