import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  border,
  shadow,
  position,
  layout,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(
    color,
    size,
    position,
    border,
    flexbox,
    shadow,
    space,
    layout,
    borderRadius,
  ),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Button;
