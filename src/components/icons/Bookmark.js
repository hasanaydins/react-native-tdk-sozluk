import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgBookmark(props) {
  return (
    <Svg width='24' height='24' viewBox='0 0 17.25 23' className='' {...props}>
      <Path
        d='M2.873 2.872V23l7.188-7.187L17.249 23V2.872zM14.373 0H0v20.125l1.438-1.437V1.438h12.935z'
        fill='#e41717'
      />
    </Svg>
  );
}

export default SvgBookmark;
