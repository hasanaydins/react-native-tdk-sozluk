import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import React, { useState, useEffect } from 'react';
import { Switch } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SvgHelpCircle from '../components/icons/HelpCircle';
import theme from '../utils/theme';
import SvgMapPin from '../components/icons/MapPin';
import SvgInfo from '../components/icons/Info';
import SvgSun from '../components/icons/Sun';
import SvgBack from '../components/icons/Back';
export default function Settings({ navigation }) {
  const [isToggle, setToggle] = useState(false);

  useEffect(
    function() {
      setToggle(!isToggle);
    },
    [isToggle],
  );

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
          bg='white'
          width='100%'
          p={20}
          borderWidth={1}
          borderColor='#f0f0f0'
        >
          <SvgHelpCircle color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            Yardım ve Geri bildirim
          </Text>
        </Button>
        <Button
          my={2}
          bg='white'
          width='100%'
          p={20}
          borderWidth={1}
          borderColor='#f0f0f0'
        >
          <SvgMapPin color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            İletişim
          </Text>
        </Button>
        <Button
          my={2}
          bg='white'
          width='100%'
          p={20}
          borderWidth={1}
          borderColor='#f0f0f0'
        >
          <SvgInfo color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            Hakkında
          </Text>
        </Button>
        <Button
          my={2}
          bg='white'
          width='100%'
          p={20}
          onPress={() => {}}
          borderWidth={1}
          borderColor='#f0f0f0'
        >
          <SvgSun color={theme.colors.red} />
          <Text fontSize={18} ml={10}>
            Gece Modu
          </Text>
          <Switch
            position='absolute'
            right={20}
            onValueChange={() => setToggle(!isToggle)}
            value={isToggle}
          />
        </Button>
      </Box>
    </Box>
  );
}
