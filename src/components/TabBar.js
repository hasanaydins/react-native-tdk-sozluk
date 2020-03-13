import React from 'react';
import {View} from 'react-native';
import Button from './Button';
import SvgHome from './icons/Home';
import SvgSearch from './icons/Search';
import SvgUser from './icons/User';
import Box from './Box';
import Theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',

      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box key={label} p={15} bg="white" borderRadius="full" mt={-15}>
            <Button
              key={label}
              size={56}
              bg="purple"
              borderRadius="full"
              justifyContent="center"
              onPress={onPress}>
              <SvgSearch stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            height={55}
            flex={1}
            pt={8}
            flexDirection="column"
            justifyContent="center"
            onPress={onPress}>
            {label === 'Home' && <SvgHome stroke={Theme.colors.gray} />}
            {label === 'Profile' && <SvgUser stroke={Theme.colors.gray} />}
            <Box
              mt={8}
              size={5}
              borderRadius={20}
              bg={isFocused ? 'purple' : 'transparent'}
            />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
