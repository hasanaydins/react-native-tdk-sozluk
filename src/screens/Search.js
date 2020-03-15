import React, { useState, useEffect } from 'react';
import { StatusBar, Animated, Keyboard, FlatList, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../utils/theme';
import DoSearch from '../screens/DoSearch';
import CardHistory from '../components/CardHistory';

import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import Input from '../components/Input';

import SvgLogo from '../components/icons/Logo';
import SvgSearch from '../components/icons/Search';
import SvgBack from '../components/icons/Back';
import SvgVoice from '../components/icons/Voice';
import SvgDots from '../components/icons/Dots';
import DetailSearch from './DetailSearch';
import Harfler from '../components/Harfler';
import KelimeAra from '../components/KelimeAra';

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode='none'>
      <SearchStack.Screen name='Search' component={SearchScreen} />
      <SearchStack.Screen name='Detail' component={DetailSearch} />
    </SearchStack.Navigator>
  );
}

function SearchScreen({ navigation }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Söz Almak',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Öğrenim',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Kılavuz',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d722',
      title: 'Sözünü etmek',
    },
  ];
  const KELIMELER = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'söz',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'söz almak',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'söz altında',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d722',
      title: 'söz vermek',
    },
    {
      id: '58694a0f-3da1-471f-bed96-145571e29d722',
      title: 'sözünden dönmek',
    },
    {
      id: '586940f-3da1-471f-bd96-145571e29d72',
      title: 'sözü bir',
    },
    {
      id: '5869a0f-3da1-471f-bd96-145571e29d722',
      title: 'sözlenmek',
    },
    {
      id: '586940f-3da1-471f-bd96-145571e29d722',
      title: 'söz uçar yazı kalır',
    },
  ];

  const HARFLER = [
    {
      id: '1',
      harf: 'ç',
    },
    {
      id: '2',
      harf: 'ö',
    },
    {
      id: '3',
      harf: 'ğ',
    },
    {
      id: '4',
      harf: 'ü',
    },
    {
      id: '5',
      harf: 'ş',
    },
    {
      id: '6',
      harf: 'û',
    },
    {
      id: '7',
      harf: 'â',
    },
    {
      id: '8',
      harf: 'î',
    },
  ];

  const [isFocused, setFocused] = React.useState(false);
  const [heroHeight] = useState(new Animated.Value(100)); // Initial value for opacity: 0

  useEffect(() => {
    if (isFocused) {
      Animated.timing(heroHeight, {
        toValue: 1,
        duration: 200,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 100,
        duration: 200,
      }).start();
    }
  }, [isFocused, heroHeight]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isFocused ? 'dark-content' : 'light-content');
    }, [isFocused]),
  );
  return (
    <Box
      flex={1}
      as={SafeAreaView}
      bg={isFocused ? theme.colors.bglight : theme.colors.red}
    >
      {/*// LOGO  */}

      <Box
        as={Animated.View}
        justifyContent='center'
        flexDirection='row'
        mt={20}
        height={heroHeight}
      >
        <SvgLogo />
      </Box>

      {/*// LOGO  */}
      {/*// INPUT  */}
      <Box mx={29}>
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
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Button position='absolute' left={14} top={21}>
          {isFocused ? (
            <Button
              onPress={() => {
                setFocused(false);
                Keyboard.dismiss();
              }}
            >
              <SvgBack color={theme.colors.gray} />
            </Button>
          ) : (
            <Button>
              <SvgSearch color={theme.colors.gray} />
            </Button>
          )}
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
        paddingHorizontal={20}
      >
        {!isFocused && (
          <Box
            flexDirection='row'
            alignContent='center'
            justifyContent='space-between'
            my={24}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
              }}
            >
              Son Aramalar
            </Text>
            <Button bottom={0}>
              <SvgDots color='black' width={5} />
            </Button>
          </Box>
        )}
        {isFocused ? (
          // HARFLER
          <Box>
            <Box justifyContent='center' alignItems='center' mt={-20}>
              <FlatList
                height={60}
                horizontal={true}
                data={HARFLER}
                renderItem={({ item }) => <Harfler item={item} />}
                keyExtractor={item => item.id}
              />
            </Box>

            <FlatList
              data={KELIMELER}
              renderItem={({ item }) => <KelimeAra item={item.title} />}
              keyExtractor={item => item.id}
            />
          </Box>
        ) : (
          // arama gecmişi
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <CardHistory text={item.title} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </Box>
    </Box>
  );
}

export default SearchStackScreen;
