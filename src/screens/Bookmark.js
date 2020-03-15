import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DetailBookmark from './DetailBookmark';
import theme from '../utils/theme';
import Box from '../components/Box';
import Text from '../components/Text';
import SafeAreaView from 'react-native-safe-area-view';
import SvgSort from '../components/icons/Sort';
import SvgDots from '../components/icons/Dots';
import CardHistory from '../components/CardHistory';
import { FlatList } from 'react-native';
import KelimeAra from '../components/KelimeAra';

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

  return (
    <Box as={SafeAreaView} flex={1}>
      <Box backgroundColor='red' height='100%'>
        <Box
          bg='bglight'
          flex={1}
          borderTopLeftRadius={23}
          borderTopRightRadius={23}
        >
          {/* SAYFA BAŞLIĞI */}
          <Box
            mt={30}
            flexDirection='row'
            justifyContent='space-between'
            paddingHorizontal={20}
          >
            <Text fontWeight='bold' fontSize={23}>
              Favoriler
            </Text>
            <Box flexDirection='row' alignItems='center'>
              <SvgSort marginRight={28} color='black' width={22} />
              <SvgDots color='black' height={22} />
            </Box>
          </Box>

          <Box mt={20} flex={1}>
            <FlatList
              data={KELIMELER}
              renderItem={({ item }) => <KelimeAra item={item.title} />}
              keyExtractor={item => item.id}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BookmarkStackScreen;
