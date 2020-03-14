import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgMenu(props) {
  return (
    <Svg width='24' height='24' viewBox='0 0 26.249 21' className='' {...props}>
      <G
        fill='none'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
      >
        <Path d='M1.5 10.5h17.864M1.5 1.5h23.249M1.5 19.505h23.249' />
      </G>
    </Svg>
  );
}

export default SvgMenu;
