import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgTwoWay(props) {
  return (
    <Svg
      width='24'
      height='24'
      fill="currentColor"
      viewBox='0 0 23.603 10.152'
      className=''
      {...props}
    >
      <Path d='M17.423 1.109v2.123H6.18V1.109A1.106 1.106 0 004.291.327L.324 4.294a1.106 1.106 0 000 1.565l3.967 3.967a1.106 1.106 0 001.889-.784V6.92h11.243v2.122a1.106 1.106 0 001.889.782l3.967-3.967a1.106 1.106 0 000-1.565L19.312.325a1.106 1.106 0 00-1.889.782z' />
    </Svg>
  );
}

export default SvgTwoWay;
