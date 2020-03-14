import * as React from 'react';
import Svg, { Text, TSpan } from 'react-native-svg';

function SvgLogo(props) {
  return (
    <Svg width='88' height='37' viewBox='0 0 88 37' className='' {...props}>
      <Text
        transform='translate(44 28)'
        fill='#fff'
        fontWeight={700}
        fontSize={27}
      >
        <TSpan x={-43.902} y={0}>
          {'s\xF6zl\xFCk'}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default SvgLogo;
