import { Placeholder as Pl } from 'rn-placeholder';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  position,
  space,
  flexbox,
  margin,
  border,
  padding,
  shadow,
  background,
  borderRadius,
} from 'styled-system';

const Placeholder = styled(Pl)(
  compose(
    compose,
    color,
    size,
    position,
    space,
    flexbox,
    margin,
    border,
    padding,
    shadow,
    background,
    borderRadius,
  ),
);

export default Placeholder;
