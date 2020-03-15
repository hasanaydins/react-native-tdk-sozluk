import * as React from 'react';
import Svg, { Text, TSpan } from 'react-native-svg';

function SvgLogo(props) {
  return (
    <Svg width='100' height='50' viewBox='0 0 88 37' className='' {...props}>
      <Text
        transform='translate(44 28)'
        fill='#fff'
        fontSize={27}
        fontWeight={900}
      >
        <TSpan x={-43.902} y={0}>
          {'s\xF6zl\xFCk'}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default SvgLogo;
