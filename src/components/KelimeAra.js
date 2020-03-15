import Text from './Text';
import Box from './Box';
import Button from './Button';
import React  from 'react';
import SvgStar from './icons/Star';
import SvgStarBos from './icons/StarBos';

export default function KelimeAra({ item }) {
  return (
    <Box>
      <Box
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        ml={20}
        mr={25}
      >
        <Text my={25} fontSize={16} fontWeight='400'>
          {item}
        </Text>

        <Box>
          <Button>
            <SvgStar color='red' />
          </Button>
        </Box>
      </Box>
      <Box height={1} bg='#E0E0E0' />
    </Box>
  );
}
