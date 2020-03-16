import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import React, { useState, useEffect } from 'react';
import { Switch, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';

import SvgHelpCircle from '../components/icons/HelpCircle';
import theme from '../utils/theme';
import SvgMapPin from '../components/icons/MapPin';
import SvgInfo from '../components/icons/Info';
import SvgSun from '../components/icons/Sun';
import SvgBack from '../components/icons/Back';
export default function Settings({ navigation }) {
  const [isToggle, setToggle] = useState(false);
  const [modalHakkinda, setModalHakkinda] = useState(false);
  const [modalYardim, setModalYardim] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <Box bg='bglight' flex={1}>
      <Box height={100} mt={40}>
        <Box
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          my={30}
        >
          <Button
            left={14}
            position='absolute'
            onPress={() => navigation.goBack()}
          >
            <SvgBack width={35} height={35} color='black' />
          </Button>

          <Text fontSize={22} fontWeight='bold'>
            Ayarlar
          </Text>
        </Box>
        <Button
          my={2}
          width='100%'
          p={20}
          borderColor='#f0f0f0'
          onPress={() => setModalYardim(true)}
        >
          <SvgHelpCircle color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            Yardım ve Geri bildirim
          </Text>
        </Button>

        <Box>
          <Modal
            isVisible={modalYardim}
            justifyContent='center'
            onBackdropPress={() => setModalYardim(false)}
          >
            <Box
              width='100%'
              bg='white'
              px={25}
              py={23}
              borderRadius={15}
              justifyContent='center'
              alignItems='center'
            >
              <Text fontWeight='bold' fontSize={20} mb={18}>
                Yardım & Geri Bildirim
              </Text>
              <Text
                mb={20}
                color='#828C95'
                fontSize={16}
                style={{ lineHeight: 25, textAlign: 'center' }}
              >
                Katkı ve önerileriniz için mail adresimize e-posta
                gönderebilirsiniz.
              </Text>
              <Box
                width='100%'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Button
                  px={38}
                  py={14}
                  borderRadius={15}
                  onPress={() => setModalHakkinda(false)}
                >
                  <Text
                    ml={40}
                    color='white'
                    fontWeight='bold'
                    fontSize={18}
                    color='#828C95'
                  >
                    Vazgeç
                  </Text>
                </Button>
                <Button
                  px={38}
                  py={14}
                  bg='#828C95'
                  borderRadius={15}
                  onPress={() => setModalYardim(false)}
                >
                  <Text color='white' fontWeight='bold' fontSize={18}>
                    Gönder
                  </Text>
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>

        <Button my={2} width='100%' p={20} borderColor='#f0f0f0'>
          <SvgMapPin color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            İletişim
          </Text>
        </Button>

        <Button
          my={2}
          width='100%'
          p={20}
          borderColor='#f0f0f0'
          onPress={() => setModalHakkinda(true)}
        >
          <SvgInfo color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            Hakkımızda
          </Text>
        </Button>
        <Box>
          <Modal
            isVisible={modalHakkinda}
            justifyContent='center'
            onBackdropPress={() => setModalHakkinda(false)}
          >
            <Box
              width='100%'
              bg='white'
              px={25}
              py={23}
              borderRadius={15}
              justifyContent='center'
              alignItems='center'
            >
              <Text fontWeight='bold' fontSize={20} mb={18}>
                Hakkımızda
              </Text>
              <Text
                mb={20}
                color='#828C95'
                fontSize={16}
                style={{ lineHeight: 25, textAlign: 'center' }}
              >
                Türk Dil Kurumunun 1945’ten beri yayımlanan Türkçe Sözlük’ünün
                2011 yılında yapılan 11. baskısının gözden geçirilip
                güncellenmiş olarak genel ağdan sunulan sürümüdür. Türkçe Sözlük
                dilimizde yaşanan gelişmelere bağlı olarak sürekli
                güncellenmektedir.
              </Text>
              <Box
                width='100%'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Text color='#828C95' ml={10} fontSize={15}>
                  Sürüm : v1.0.0
                </Text>
                <Button
                  px={38}
                  py={14}
                  bg='#828C95'
                  borderRadius={15}
                  onPress={() => setModalHakkinda(false)}
                >
                  <Text color='white' fontWeight='bold' fontSize={18}>
                    Kapat
                  </Text>
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
        <Box
          flexDirection='row'
          alignItems='center'
          my={2}
          width='100%'
          p={20}
          borderColor='#f0f0f0'
        >
          <SvgSun color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            Gece Modu
          </Text>
          <Switch position='absolute' right={20} value={false} />
        </Box>
      </Box>
      <Text
        alignSelf='center'
        position='absolute'
        bottom={10}
        color='#aaa'
        fontSize={12}
      >
        Copyright © 2020 sözlük. Tüm hakları saklıdır.
      </Text>
    </Box>
  );
}
