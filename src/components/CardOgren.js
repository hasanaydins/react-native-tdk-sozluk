import Box from './Box';
import Text from './Text';
import SvgRefresh from './icons/Refresh';
import SvgStar from './icons/Star';
import * as React from 'react';

export function CardOgren({ subtitle, summary, width }) {
  return (
    <Box>
      <Box
        borderRadius={15}
        borderColor='#E0E0E0'
        borderWidth={1}
        bg='white'
        width={width}
        paddingHorizontal={28}
        paddingVertical={18}
        mt={8}
      >
        <Box flexDirection='row' justifyContent='space-between'>
          <Text fontSize={16} fontWeight='500' mr={40}>
            {subtitle}
          </Text>
          <Box position='absolute' right={0}>
            <SvgStar />
          </Box>
        </Box>
        <Text mt={4} fontWeight='300'>{summary}</Text>
      </Box>
    </Box>
  );
}

export function CardCenterOgren({ text }) {
  return (
    <Box>
      <Box
        borderRadius={15}
        borderColor='#E0E0E0'
        borderWidth={1}
        alignItems='center'
        justifyContent='center'
        bg='white'
        paddingHorizontal={22}
        paddingVertical={28}
        mt={8}
      >
        <Text fontSize={15} fontWeight='600'>
          {text}
        </Text>
      </Box>
    </Box>
  );
}
