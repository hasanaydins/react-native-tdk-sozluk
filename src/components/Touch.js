import { TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius,
} from 'styled-system';

const Touch = styled(TouchableHighlight)(
  compose(
    color,
    size,
    flexbox,
    space,
    borderRadius,
  ),
);

Touch.defaultProps = {
  padding: 0,
  margin: 0,
};

export default Touch;
