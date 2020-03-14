import { TextInput as TInput } from 'react-native';
import styled from 'styled-components';
import { compose, color, size, typography, space, layout,borderRadius, boxShadow } from 'styled-system';
const Input = styled(TInput)(
  compose(
    color,
    size,
    space,
    layout,
    boxShadow,
    borderRadius,
    typography,
  ),
);

Input.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Input;
