import { Text as T } from 'react-native';
import styled from 'styled-components';
import { compose, color, size, typography, space, layout } from 'styled-system';

const Text = styled(T)(
  compose(
    color,
    size,
    space,
    layout,
    typography,
  ),
);

Text.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Text;
