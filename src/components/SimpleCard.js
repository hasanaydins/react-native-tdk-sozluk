import { Dimensions } from 'react-native';
import Box from './Box';
import Text from './Text';
import React from 'react';

const screenHeight = Math.round(Dimensions.get('window').height);

export function SimpleCardContainer({ children, ...props }) {
  return (
    <Box
      borderRadius={12}
      bg='white'
      mr={15}
      p={15}
      mb={18}
      boxShadow='0px 5px 10px #00000010'
      justifyContent='center'
    >
      {children}
    </Box>
  );
}

export function SimpleCardText({ children }) {
  return (
    <Text fontSize={14} fontWeight='400'>
      {children}
    </Text>
  );
}
