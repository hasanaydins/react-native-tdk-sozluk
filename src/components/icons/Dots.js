import * as React from 'react';
import Svg, { G, Circle } from 'react-native-svg';

function SvgDots(props) {
  return (
    <Svg width='24' height='24' viewBox='0 0 5 22' className='' {...props}>
      <G transform='translate(-54 -18)'>
        <Circle cx={2.5} cy={2.5} r={2.5} transform='translate(54 35)' />
        <Circle cx={2.5} cy={2.5} r={2.5} transform='translate(54 18)' />
        <Circle cx={2.5} cy={2.5} r={2.5} transform='translate(54 27)' />
      </G>
    </Svg>
  );
}

export default SvgDots;
