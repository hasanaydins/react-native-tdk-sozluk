import Text from './Text';
import Box from './Box';
import React from 'react';

export default function KelimeAra({ item }) {
  return (
    <Box>
      <Text mx={33} my={20} fontSize={16} fontWeight='400'>
        {item}
      </Text>
      <Box height={1} bg='#E0E0E0' />
    </Box>
  );
}
