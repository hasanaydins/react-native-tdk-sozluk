import React, { useState, useEffect } from 'react';
import { StatusBar, ScrollView, RefreshControl } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailOgren from './DetailOgren';
import theme from '../utils/theme';
import { useFocusEffect } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import Placeholder from '../components/Placeholder';
import {
  CardOgren,
  CardCenterOgren,
  CardCenterDogruYanlis,
} from '../components/CardOgren';
import SvgRefresh from '../components/icons/Refresh';
import SvgTwoWay from '../components/icons/TwoWay';
import SvgWrong from '../components/icons/Wrong';
import SvgTrue from '../components/icons/True';
import { Fade, PlaceholderLine } from 'rn-placeholder';
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
  const [ogrenData, setOgrenData] = useState(null);

  const getOgrenData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setOgrenData(data);
  };

  useEffect(() => {
    getOgrenData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getOgrenData();
    setRefreshing(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const [refreshing, setRefreshing] = useState(false);
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
          <Box alignItems='center' mt={28} mb={42}>
            <Text fontWeight='bold' fontSize={23}>
              Günün Bilgileri
            </Text>
          </Box>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {/* BİR KELİME ANA */}
            <Box mb={35}>
              {ogrenData && (
                <Box flexDirection='row' mb={8} ml={4}>
                  <Text fontWeight='bold' fontSize={18}>
                    Bir Kelime
                  </Text>
                </Box>
              )}
              {ogrenData ? (
                <CardOgren
                  /* subtitle={ogrenData && ogrenData.kelime[0].madde}*/
                  subtitle={ogrenData?.kelime[0]?.madde}
                  summary={ogrenData?.kelime[0]?.anlam}
                />
              ) : (
                <Placeholder mt={20} Animation={Fade}>
                  <PlaceholderLine width={80} />
                  <PlaceholderLine />
                  <PlaceholderLine width={30} />
                </Placeholder>
              )}
            </Box>

            {/* SIKÇA KARIŞTIRILANLAR ANA */}
            <Box mb={35}>
              {ogrenData && (
                <Box flexDirection='row' mb={8} ml={4}>
                  <Text fontWeight='bold' fontSize={18}>
                    Sıkça karıştırılanlar
                  </Text>
                </Box>
              )}
              <Box flexDirection='row'>
                <Box flex={1}>
                  {ogrenData ? (
                    <CardCenterOgren
                      title='Sıkça karıştırılanlar'
                      dogru={ogrenData?.karistirma[0].dogru}
                      yanlis={ogrenData?.karistirma[0].yanlis}
                      ogrenData={ogrenData}
                    />
                  ) : (
                    <Placeholder mt={20} Animation={Fade}>
                      <PlaceholderLine width={80} />
                      <PlaceholderLine />
                      <PlaceholderLine width={30} />
                    </Placeholder>
                  )}
                </Box>
              </Box>
            </Box>
            {/* Sıkça Yapılan Yanlışlara Doğrular */}
            <Box>
              {ogrenData && (
                <Box flexDirection='row' mb={8} ml={4}>
                  <Text fontWeight='bold' fontSize={18}>
                    Sıkça Yapılan Yanlışlara Doğrular
                  </Text>
                </Box>
              )}
              <Box mb={35}>
                <Box flexDirection='row'>
                  <Box flex={1}>
                    {ogrenData ? (
                      <CardCenterDogruYanlis
                        title='Sıkça karıştırılanlar'
                        dogruYanlis=<SvgWrong color='red' />
                        text={ogrenData?.syyd[0].yanliskelime}
                      />
                    ) : (
                      <Placeholder mt={20} Animation={Fade}>
                        <PlaceholderLine width={80} />
                        <PlaceholderLine width={80} />
                        <PlaceholderLine width={30} />
                      </Placeholder>
                    )}
                  </Box>

                  {ogrenData && (
                    <SvgTwoWay
                      color='black'
                      alignSelf='center'
                      width={26}
                      style={{ marginHorizontal: 25 }}
                    />
                  )}

                  <Box flex={1}>
                    {ogrenData ? (
                      <CardCenterDogruYanlis
                        flex={1}
                        dogruYanlis=<SvgTrue color='green' />
                        text={ogrenData?.syyd[0].dogrukelime}
                      />
                    ) : (
                      <Placeholder mt={20} Animation={Fade}>
                        <PlaceholderLine width={80} />
                        <PlaceholderLine width={80} />
                        <PlaceholderLine width={30} />
                      </Placeholder>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>

            {/*  Bir Deyim Atasözü */}
            <Box mb={35}>
              {ogrenData && (
                <Box flexDirection='row' mb={8} ml={4}>
                  <Text fontWeight='bold' fontSize={18}>
                    Bir Deyim Atasözü
                  </Text>
                </Box>
              )}
              {ogrenData ? (
                <CardOgren
                  subtitle={ogrenData?.atasoz[0].madde}
                  summary={ogrenData?.atasoz[0].anlam}
                />
              ) : (
                <Placeholder mt={20} Animation={Fade}>
                  <PlaceholderLine width={80} />
                  <PlaceholderLine />
                  <PlaceholderLine width={30} />
                </Placeholder>
              )}
            </Box>

            {!ogrenData && (
              <Placeholder mt={20} Animation={Fade}>
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
              </Placeholder>
            )}
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
}

export default OgrenStackScreen;
