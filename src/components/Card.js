import { Dimensions } from 'react-native';
import Box from './Box';
import Text from './Text';
import React from 'react';

const screenHeight = Math.round(Dimensions.get('window').height);

export function CardContainer({ children, ...props }) {
  return (
    <Box
      borderRadius={15}
      bg='white'
      p={25}
      mb={18}
      boxShadow='0px 5px 10px #00000010'
    >
      {children}
    </Box>
  );
}

export function CardTitle({ children, fontStyle }) {
  return (
    <Text fontSize={17} mb={12} fontStyle={fontStyle}>
      {children}
    </Text>
  );
}

export function CardSubtitle({ children }) {
  return (
    <Text fontSize={16} fontWeight='300' mb={12}>
      {children}
    </Text>
  );
}

export function CardCenterText({ children }) {
  return (
    <Text fontSize={16} fontWeight='300'>
      {children}
    </Text>
  );
}
