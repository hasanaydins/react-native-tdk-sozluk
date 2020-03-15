import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgSearch(props) {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 26.621 26.621'
      className=''
      {...props}
    >
      <G
        fill='none'
        stroke='#e4171e'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
      >
        <Path d='M21.994 11.747A10.247 10.247 0 1111.747 1.5a10.247 10.247 0 0110.247 10.247zM24.5 24.5l-5.45-5.45' />
      </G>
    </Svg>
  );
}

export default SvgSearch;
