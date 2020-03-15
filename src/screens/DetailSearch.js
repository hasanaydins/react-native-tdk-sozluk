import React from 'react';
import { ScrollView, Image, FlatList, ImageBackground } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Button from '../components/Button';
import Box from '../components/Box';

import Text from '../components/Text';
import SvgBack from '../components/icons/Back';
import SvgStarBos from '../components/icons/StarBos';
import SvgSound from '../components/icons/Sound';
import { CardContainer, CardTitle, CardSubtitle } from '../components/Card';
import { SimpleCardContainer, SimpleCardText } from '../components/SimpleCard';

function DetailSearch({ route, navigation }) {
  const { paramID } = route.params;
  const { paramDesc } = route.params;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Atasözleri, Deyimler ve Birleşik Fiiller',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Birleşik Kelimeler',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Kılavuz',
    },
  ];

  const GIFS = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      source: 'https://sozluk.gov.tr/assets/img/isaret/s.gif',
      harf: 's',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      source: 'https://sozluk.gov.tr/assets/img/isaret/%C3%B6.gif',
      harf: 'ö',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      source: 'https://sozluk.gov.tr/assets/img/isaret/z.gif',
      harf: 'z',
    },
    {
      id: '3ac68fc-c605-48d3-a4f8-fbd91aa97f63',
      source: 'https://sozluk.gov.tr/assets/img/isaret/%C3%B6.gif',
      harf: 'a',
    },
    {
      id: '58694a0f-3a1-471f-bd96-145571e29d72',
      source: 'https://sozluk.gov.tr/assets/img/isaret/z.gif',
      harf: 'l',
    },
  ];

  return (
    <Box as={SafeAreaView} bg='bglight' flex={1}>
      <Box
        style={{ height: 360 }}
        bg='red'
        position='absolute'
        top={0}
        left={0}
        width='100%'
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
      />
      {/* GERİ VE STAR*/}
      <Box
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        mx={28}
        my={10}
      >
        <Button onPress={() => navigation.goBack()}>
          <SvgBack color='white' width='35' height='35' />
        </Button>
        <Button>
          <SvgStarBos color='white' width='30' height='30' />
        </Button>
      </Box>

      {/* KELİME BAŞLIK */}
      <Box
        mt={30}
        width={230}
        height={77}
        bg='#FFFFFF24'
        flexDirection='row'
        borderTopRightRadius={12}
        borderBottomRightRadius={12}
        justifyContent='center'
        position='relative'
        alignItems='center'
      >
        <Text
          fontSize={26}
          fontWeight='800'
          color='white'
          fontStyle='italic'
          right={0}
        >
          Söz almak
        </Text>

        <Button
          bg='white'
          size={40}
          borderRadius='full'
          position='absolute'
          right={-15}
          justifyContent='center'
          alignItems='center'
        >
          <SvgSound width={20} />
        </Button>
      </Box>
      <ScrollView style={{ marginTop: 50, paddingHorizontal: 30 }}>
        <CardContainer>
          <CardTitle>
            1. fiil{' '}
            <CardSubtitle>
              konuşmak için toplantı başkanından izin almak, konuşmaya başlamak:
            </CardSubtitle>
          </CardTitle>
          <CardTitle fontStyle='italic'>
            Toplantıda ilk olarak başkan söz aldı.
          </CardTitle>
          <CardTitle>
            2. fiil{' '}
            <CardSubtitle>
              birinin bir işi yapacağını kesin olarak bildirmesini sağlamak:
            </CardSubtitle>
          </CardTitle>
          <CardTitle fontStyle='italic'>
            İşimin yapılacağı konusunda bakandan söz aldım.
          </CardTitle>
          <CardTitle>
            3. fiil{' '}
            <CardSubtitle>
              erkek tarafı oğullarıyla evlendirmek üzere kızın ailesinden olumlu
              cevap almak.
            </CardSubtitle>
          </CardTitle>
        </CardContainer>

        <CardContainer>
          <CardTitle>Parmak Alfabesiyle Gösterilişi</CardTitle>
          <FlatList
            horizontal={true}
            data={GIFS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Box mr={10}>
                <Image
                  source={{ uri: item.source }}
                  style={{
                    overflow: 'hidden',
                    height: 60,
                    width: 85,
                    borderRadius: 15,
                    borderColor: '#E0E0E0',
                    borderWidth: 2,
                    overlayColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <Text alignSelf='center' mt={4}>
                  {item.harf}
                </Text>
              </Box>
            )}
          />
        </CardContainer>
        <Text ml={10} mb={10} fontSize={16} fontStyle='italic' fontWeight='600'>
          İçeren Yerler
        </Text>
        <FlatList
          height={70}
          horizontal={true}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SimpleCardContainer>
              <SimpleCardText>{item.title}</SimpleCardText>
            </SimpleCardContainer>
          )}
        />

        {/*        <Text>Details Screen</Text>
        <Text>paramID: {paramID}</Text>
        <Text>paramDesc: {paramDesc}</Text>
        <Button
          title='Go to Details again'
          onPress={() =>
            navigation.push('Detail', {
              paramID: Math.floor(Math.random() * 100),
            })
          }
        />

        <Button
          title='Go to Home'
          onPress={() => navigation.navigate('Search')}
        />
        <Button title='Go back' onPress={() => navigation.goBack()} />*/}
      </ScrollView>
    </Box>
  );
}
export default DetailSearch;
