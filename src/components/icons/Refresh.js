import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgRefresh(props) {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 17.855 14.511'
      className=''
      {...props}
    >
      <G
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <Path d='M17.149 1.277v4.484h-4.484M.707 13.234V8.75h4.484' />
        <Path d='M2.583 5.014a6.726 6.726 0 0111.1-2.511l3.468 3.258M.707 8.75l3.468 3.258a6.726 6.726 0 0011.1-2.511' />
        <Path d='M2.583 5.014a6.726 6.726 0 0111.1-2.511l3.468 3.258M.707 8.75l3.468 3.258a6.726 6.726 0 0011.1-2.511' />
      </G>
    </Svg>
  );
}

export default SvgRefresh;
