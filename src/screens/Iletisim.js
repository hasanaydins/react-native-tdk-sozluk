import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SvgBack from '../components/icons/Back';
import SvgGo from '../components/icons/Go';
export default function Iletisim({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <Box as={SafeAreaView} bg='red' flex={1}>
      <Box bg='bglight' flex={1}>
        <Box
          flexDirection='row'
          height={100}
          bg='red'
          justifyContent='center'
          alignItems='center'
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}
        >
          <Button
            left={14}
            position='absolute'
            onPress={() => navigation.goBack()}
          >
            <SvgBack width={35} height={35} color='white' />
          </Button>

          <Text fontSize={22} fontWeight='bold' color='white'>
            İletişim
          </Text>
        </Box>

        <Box px={20} mt={30}>
          <Text fontWeight='bold' fontSize={18}>
            Türk Dil Kurumu Başkanlığı
          </Text>
          <Box width={80} bg='#E0E0E0' height={2} mt={15} />

          <Text
            fontWeight='bold'
            style={{ lineHeight: 22 }}
            fontSize={16}
            mt={14}
          >
            Adres:{' '}
            <Text fontWeight='400'>
              Atatürk Bulvarı No. : 217 06680 Kavaklıdere / ANKARA
            </Text>
          </Text>
          <Text
            fontWeight='bold'
            style={{ lineHeight: 22 }}
            fontSize={16}
            mt={14}
          >
            Telefon: <Text fontWeight='400'>+90 312 457 52 00</Text>
          </Text>
          <Text
            fontWeight='bold'
            style={{ lineHeight: 22 }}
            fontSize={16}
            mt={14}
          >
            Faks: <Text fontWeight='400'>+90 312 468 07 83</Text>
          </Text>
          <Text
            fontWeight='bold'
            style={{ lineHeight: 22 }}
            fontSize={16}
            mt={14}
          >
            E-posta:{' '}
            <Text fontWeight='400' color='red'>
              bilgi@tdk.gov.tr
            </Text>
          </Text>

          <Text fontWeight='bold' fontSize={18} mt={40}>
            Kızılay Kitap Satış Mağazası
          </Text>
          <Box width={80} bg='#E0E0E0' height={2} mt={15} />

          <Text
            fontWeight='bold'
            style={{ lineHeight: 22 }}
            fontSize={16}
            mt={14}
          >
            Adres:{' '}
            <Text fontWeight='400'>
              Cumhuriyet Mahallesi, Bayındır 1 Sokak, No.: 24/6 Kızılay / ANKARA
            </Text>
          </Text>
          <Text
            fontWeight='bold'
            style={{ lineHeight: 22 }}
            fontSize={16}
            mt={14}
          >
            Telefon: <Text fontWeight='400'>+90 312 457 52 00</Text>
          </Text>

          <Text fontWeight='bold' fontSize={18} mt={40}>
            E - Mağaza
          </Text>
          <Box width={80} bg='#E0E0E0' height={2} mt={15} />

          <Box flexDirection='row' alignItems='center'>
            <Text color='red' style={{ lineHeight: 22 }} fontSize={16} mt={14}>
              https://emagaza-tdk.ayk.gov.tr
            </Text>

            <Button mt={10} ml={10}>
              <SvgGo color='black' width={20} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
