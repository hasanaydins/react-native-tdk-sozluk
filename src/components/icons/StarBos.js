import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgStarBos(props) {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 22.256 21.264'
      className=''
      {...props}
    >
      <Path
        d='M11.128 1l3.13 6.34 7 1.023-5.066 4.937 1.2 6.968-6.259-3.292-6.264 3.288 1.2-6.968L1 8.363 8 7.34z'
        fill='none'
        stroke='#e0e0e0'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgStarBos;
