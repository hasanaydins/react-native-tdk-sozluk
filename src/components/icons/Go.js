import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgGo(props) {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 14.125 14.125'
      className=''
      {...props}
    >
      <G
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      >
        <Path
          d='M11.012 7.902v4.1a1.368 1.368 0 01-1.368 1.368H2.118A1.368 1.368 0 01.75 12.007V4.481a1.368 1.368 0 011.368-1.368h4.1M8.959 1.061h4.1v4.1'
          stroke='#000'
        />
        <Path d='M5.539 8.586l7.525-7.525' stroke='currentColor' />
      </G>
    </Svg>
  );
}

export default SvgGo;
