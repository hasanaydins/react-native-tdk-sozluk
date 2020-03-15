import React, { useState, useEffect } from 'react';
import Button from './Button';
import Text from './Text';
import SvgStar from './icons/Star';
import SvgStarBos from './icons/StarBos';
import Box from './Box';

export default function CardHistory({ text, navigation }) {
  const [isClicked, setClicked] = React.useState(false);

  useEffect(() => {
    setClicked(isClicked);
  }, [isClicked]);
  return (
    <Box my={3}>
      <Button
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        position='relative'
        height={60}
        bg='white'
        border='1px solid'
        borderColor='#E0E0E0'
        borderRadius={15}
        onPress={() => {
          navigation.navigate('Detail', { paramID: 12, paramDesc: text });
        }}
      >
        <Text ml={25} fontSize={14} fontWeight='400'>
          {text}
        </Text>
        <Button
          position='absolute'
          right={18}
          onPress={() => {
            setClicked(!isClicked);
          }}
        >
          {isClicked ? <SvgStar color='red' /> : <SvgStarBos color='red' />}
        </Button>
      </Button>
    </Box>
  );
}
