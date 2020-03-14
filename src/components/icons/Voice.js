import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgVoice(props) {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 18.044 24.488'
      className=''
      {...props}
    >
      <Path
        d='M9.022 15.466a3.85 3.85 0 003.854-3.866l.013-7.733a3.867 3.867 0 10-7.733 0V11.6a3.861 3.861 0 003.866 3.866zm6.831-3.866a6.688 6.688 0 01-6.831 6.573A6.688 6.688 0 012.191 11.6H0a8.991 8.991 0 007.733 8.661v4.227h2.578v-4.227a8.98 8.98 0 007.733-8.661z'
        fill='rgba(228,23,30,0.75)'
      />
    </Svg>
  );
}

export default SvgVoice;
