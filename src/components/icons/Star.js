import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgStar(props) {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 20.256 19.264'
      className=''
      {...props}
    >
      <Path
        d='M10.128 0l3.13 6.34 7 1.023-5.066 4.937 1.2 6.968-6.259-3.292-6.264 3.288 1.2-6.968L0 7.363 7 6.34z'
        fill='#e4171e'
      />
    </Svg>
  );
}

export default SvgStar;
