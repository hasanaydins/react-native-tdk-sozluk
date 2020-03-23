import Box from './Box';
import Text from './Text';
import Button from './Button';
import SvgStar from './icons/Star';
import * as React from 'react';
import SvgTwoWay from './icons/TwoWay';

export function CardOgren({ subtitle, summary, width }) {
  return (
    <Box>
      <Box
        borderRadius={15}
        borderColor='#E0E0E0'
        borderWidth={1}
        bg='white'
        width={width}
        paddingHorizontal={20}
        paddingVertical={18}
        mt={8}
      >
        <Box flexDirection='row' justifyContent='space-between'>
          <Text fontSize={16} fontWeight='500' mr={40}>
            {subtitle}
          </Text>
          <Box position='absolute' right={0}>
            <Button>
              <SvgStar />
            </Button>
          </Box>
        </Box>
        <Text mt={4} fontSize={15} fontWeight='300'>
          {summary}
        </Text>
      </Box>
    </Box>
  );
}

export function CardCenterOgren({ ogrenData, dogru, yanlis }) {
  return (
    <Box>
      <Box
        borderRadius={15}
        borderColor='#E0E0E0'
        borderWidth={1}
        alignItems='center'
        justifyContent='space-around'
        flexDirection='row'
        bg='white'
        paddingHorizontal={15}
        paddingVertical={28}
        mt={8}
      >
        <Box>
          <Text fontSize={15} fontWeight='600'>
            {dogru}
          </Text>
        </Box>
        {ogrenData && (
          <SvgTwoWay
            color='black'
            width={26}
            style={{ marginHorizontal: 25 }}
          />
        )}
        <Box>
          <Text fontSize={15} fontWeight='600'>
            {yanlis}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
export function CardCenterDogruYanlis({ text, dogruYanlis }) {
  return (
    <Box>
      <Box
        borderRadius={15}
        borderColor='#E0E0E0'
        borderWidth={1}
        alignItems='center'
        justifyContent='center'
        flexDirection='row'
        bg='white'
        height={130}
        paddingHorizontal={15}
        paddingVertical={28}
        mt={8}
      >
        <Box
          p={1}
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          flexDirection='column'
        >
          <Box>{dogruYanlis}</Box>

          <Box mt={4}>
            <Text
              fontSize={15}
              fontWeight='600'
              textAlign='center'
              style={{ lineHeight: 18 }}
            >
              {text.split(',')}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
