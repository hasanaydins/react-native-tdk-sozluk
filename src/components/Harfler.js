import Text from './Text';
import Button from './Button';
import React from 'react';

export default function Harfler({ item }) {
  return (
    <Button
      justifyContent='center'
      ml={10}
      size={35}
      onPress={() => alert('sd')}
      bg='white'
      borderRadius={7}
      boxShadow='0px 4px 5px #00000015'
    >
      <Text fontWeight='bold' color='#8D97A0'>
        {item.harf}
      </Text>
    </Button>
  );
}
