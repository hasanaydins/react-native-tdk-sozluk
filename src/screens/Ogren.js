import { StatusBar, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import DetailOgren from './DetailOgren';
import theme from '../utils/theme';
import { useFocusEffect } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import { CardOgren, CardCenterOgren } from '../components/CardOgren';
import SvgRefresh from '../components/icons/Refresh';
import SvgTwoWay from '../components/icons/TwoWay';
const OgrenStack = createStackNavigator();

function OgrenStackScreen() {
  return (
    <OgrenStack.Navigator
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
      <OgrenStack.Screen name='sözlük' component={Ogren} />
      <OgrenStack.Screen name='Details' component={DetailOgren} />
    </OgrenStack.Navigator>
  );
}

function Ogren() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <Box backgroundColor='red' height='100%'>
        <Box
          bg='bglight'
          flex={1}
          borderTopLeftRadius={23}
          borderTopRightRadius={23}
          paddingHorizontal={20}
        >
          {/* SAYFA BAŞLIĞI */}
          <Box alignItems='center' mt={28}>
            <Text fontWeight='bold' fontSize={23}>
              Günün Bilgileri
            </Text>
          </Box>
          <ScrollView>
            {/* BİR KELİME ANA */}
            <Box mt={42} flexDirection='row'>
              <Text fontWeight='bold' fontSize={18}>
                Bir Kelime
              </Text>
              <Button>
                <SvgRefresh color='#E0E0E0' marginLeft={13} />
              </Button>
            </Box>
            <CardOgren
              subtitle='cinsilatif isim.'
              summary='Güzel, alımlı, hoşa giden kadın.'
            />

            {/* SIKÇA KARIŞTIRILANLAR ANA */}
            <Box mt={42} flexDirection='row'>
              <Text fontWeight='bold' fontSize={18}>
                Sıkça karıştırılanlar
              </Text>
              <Button>
                <SvgRefresh color='#E0E0E0' marginLeft={13} />
              </Button>
            </Box>
            <Box flexDirection='row' justifyContent='space-between'>
              <CardCenterOgren
                title='Sıkça karıştırılanlar'
                text='tefriş etmek  fiil.'
              />

              <SvgTwoWay color='black' alignSelf='center' width={26} />

              <Box>
                <CardCenterOgren text='tefriş etmek  fiil.' />
              </Box>
            </Box>

            {/* BİR KELİME ANA */}
            <Box mt={42} flexDirection='row'>
              <Text fontWeight='bold' fontSize={18}>
                Bir Deyim Atasözü
              </Text>
              <Button>
                <SvgRefresh color='#E0E0E0' marginLeft={13} />
              </Button>
            </Box>
            <CardOgren
              subtitle='“gülü tarife ne hacet, ne çiçektir biliriz.”'
              summary='birinin uygunsuz özellikleri sayılırken bunların öteden beri bilindiğini anlatmak için söylenen bir söz.'
            />
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
}

export default OgrenStackScreen;
