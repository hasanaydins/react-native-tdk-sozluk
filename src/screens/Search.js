import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Input from '../components/Input';
import DetailSearch from './DetailSearch';
import SvgLogo from '../components/icons/Logo';
import SvgSearch from '../components/icons/Search';
import SvgClose from '../components/icons/Close';
import SvgVoice from '../components/icons/Voice';
import Box from '../components/Box';
import Button from '../components/Button';
import theme from '../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerTitle: <SvgLogo color='white' width={60} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title='Info'
              color='red'
            />
          ),
        }}
      />
    </SearchStack.Navigator>
  );
}

function SearchScreen() {
  /* const [isFocused, setFocused] = React.useState(false);*/

  return (
    <Box position='relative' mx={8}>
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
  );
}

export default SearchStackScreen;
