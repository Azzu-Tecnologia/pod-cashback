import styled from "styled-components/native";
import { colors } from "../../../styles";
import UnstyledText from "../Text";
import { metrics } from "../../../utils";

export const Wrapper = styled.View``;

export const ButtonWrapper = styled.TouchableOpacity`
  ${({ small }) =>
    small ? `flex-wrap: wrap;` : `width: 100%;flex-direction: row;`}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.disabled && !props.loading ? 0.3 : 1.0)};
  padding-vertical: ${({ small }) => (small ? metrics.px10 : metrics.px15)}px;
  padding-horizontal: ${metrics.px15}px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1.0)};
  ${(props) => props.outline && `border: 1px solid ${colors[props.color]}`}
  border-radius: ${(props) => {
    switch (true) {
      case props.square:
        return "0px";
      case props.round:
        return `${metrics.px20}px`;
      default:
        return `${metrics.px5}px`;
    }
  }};
  background: ${(props) => {
    if (props.outline) {
      return "transparent";
    }
    return props.color ? colors[props.color] : colors.primary;
  }};
`;
export const Text = styled((props) => <UnstyledText {...props} />)`
  color: ${({ outline, color }) =>
    outline ? colors[color] : colors.secondary};
  font-size: ${(props) => props.fontSize || 14}px;
  font-weight: ${(props) => props.fontWeight || 600};
`;
