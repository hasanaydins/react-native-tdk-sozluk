import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import SvgSearch from './icons/Search';
import SvgOgren from './icons/Ogren';
import SvgBookmark from './icons/Bookmark';
import Box from './Box';
function TabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: '#00000015',
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        backgroundColor: 'white',
        flexDirection: 'row',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
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

        return (
          <Box
            key={label}
            flex={1}
            flexDirection='row'
            justifyContent='center'
            p={15}
            bg='transparent'
          >
            <Button
              height={55}
              width={95}
              justifyContent='center'
              alignItems='center'
              bg={isFocused ? '#E4171E18' : 'transparent'}
              borderRadius={14}
              onPress={onPress}
            >
              {label === 'Search' && <SvgSearch color='#E41717' />}
              {label === 'Ogren' && <SvgOgren color='#E41717' />}
              {label === 'Bookmark' && <SvgBookmark color='#E41717' />}
            </Button>
          </Box>
        );
      })}
    </View>
  );
}

export default TabBar;
