import styled from "styled-components/native";
import { colors } from "src/styles";
import UnstyledText from "../Text";
import { metrics } from "src/utils";

export const Wrapper = styled.View`
  height: 48px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  opacity: ${({ disabled, loading }) => (disabled && !loading ? 0.3 : 1.0)};
  padding-horizontal: 15px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1.0)};
  ${({ outline, color }) => outline && `border: 2px solid ${colors[color]}`}
  border-radius: ${(props) => {
    switch (true) {
      case props.square:
        return "0px";
      case props.round:
        return `${metrics.px20}px`;
      default:
        return `${metrics.px3}px`;
    }
  }};
  ${(props) => props.type === "google" && "border: 1px solid #e6e6e6"}
  background: ${colors.white};
`;
export const Text = styled(UnstyledText)`
  color: ${colors.black};
  font-size: ${({ fontSize }) => fontSize || 15}px;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`;
